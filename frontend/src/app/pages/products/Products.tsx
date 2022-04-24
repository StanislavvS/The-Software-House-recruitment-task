import React from "react";
import { Link } from "react-router-dom";
import { useProductsPage } from "./styles";
import { AppRoute } from "routing/AppRoute.enum";
import NavBar from "app/components/NavBar/NavBar";

export const Products = () => {
  const classes = useProductsPage();
  return (
    <div className={classes.productsPage}>
      <NavBar />
    </div>
  );
};
