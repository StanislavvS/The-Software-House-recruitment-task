import Spinner from "app/components/Spinner/Spinner";
import ProductCard from "app/pages/products/components/ProductCard/ProductCard";
import { useProducts } from "providers/ProductsProvider";
import { Product } from "providers/ProductsProvider.types";
import React, { useState, useEffect } from "react";
import { useProductsPage } from "../../hooks";
import { useProductsSectionStyles } from "./styles";

const ProductsSection = () => {
  const { isLoading } = useProductsPage();
  const { products, filtersOption } = useProducts();
  const classes = useProductsSectionStyles();
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFilterProducts(
      products.filter(
        ({ name, promo, active }) =>
          active === filtersOption.active &&
          promo === filtersOption.promo &&
          name.toLowerCase().includes(filtersOption.filterTextValue)
      )
    );
  }, [
    filtersOption.active,
    filtersOption.promo,
    filtersOption.filterTextValue,
  ]);

  console.log(filterProducts, products);

  if (isLoading) return <Spinner />;

  return (
    <div className={classes.productsSectionContainer}>
      {filtersOption.active ||
      filtersOption.promo ||
      filtersOption.filterTextValue !== ""
        ? filterProducts.map(
            ({ id, name, description, promo, active, image, rating }) => (
              <ProductCard
                key={id}
                id={id}
                name={name}
                description={description}
                promo={promo}
                active={active}
                image={image}
                rating={rating}
              />
            )
          )
        : products.map(
            ({ id, name, description, promo, active, image, rating }) => (
              <ProductCard
                key={id}
                id={id}
                name={name}
                description={description}
                promo={promo}
                active={active}
                image={image}
                rating={rating}
              />
            )
          )}
      {/* 
      {filterProducts.map(
        ({ id, name, description, promo, active, image, rating }) => (
          <ProductCard
            key={id}
            id={id}
            name={name}
            description={description}
            promo={promo}
            active={active}
            image={image}
            rating={rating}
          />
        )
      )} */}
    </div>
  );
};

export default ProductsSection;
