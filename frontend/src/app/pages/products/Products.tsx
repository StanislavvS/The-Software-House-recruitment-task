import React from "react";
import { useProductsPage } from "./styles";
import NavBar from "app/components/NavBar/NavBar";
import { ProductsProvider } from "providers/ProductsProvider";
import ProductsSection from "./components/ProductsSection/ProductsSection";

export const Products = () => {
  const classes = useProductsPage();

  return (
    <ProductsProvider>
      <div className={classes.productsPage}>
        <NavBar />
        <ProductsSection />
      </div>
    </ProductsProvider>
  );
};
