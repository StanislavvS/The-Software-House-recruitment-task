import React from "react";
import { useProductsPage } from "./styles";
import NavBar from "app/components/NavBar/NavBar";

export const Products = () => {
  const classes = useProductsPage();

  return (
    <div className={classes.productsPage}>
      <NavBar />
    </div>
  );
};
