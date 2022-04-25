import React from "react";
import { useProductsPage } from "./styles";
import NavBar from "app/components/NavBar/NavBar";
import { ProductsProvider } from "providers/ProductsProvider";

export const Products = () => {
  const classes = useProductsPage();

  return (
    <ProductsProvider>
      <div className={classes.productsPage}>
        <NavBar />
      </div>
    </ProductsProvider>
  );
};
