import Spinner from "app/components/Spinner/Spinner";
import ProductCard from "app/pages/products/components/ProductCard/ProductCard";
import { useProducts } from "providers/ProductsProvider";
import React from "react";
import { useProductsPage } from "../../hooks";
import { useProductsSectionStyles } from "./styles";

const ProductsSection = () => {
  const { isLoading } = useProductsPage();
  const { products } = useProducts();
  const classes = useProductsSectionStyles();

  if (isLoading) return <Spinner />;

  return (
    <div className={classes.productsSectionContainer}>
      {products.map(
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
    </div>
  );
};

export default ProductsSection;
