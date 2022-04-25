import React from "react";
import { useProductsPage } from "../hooks";

const ProductsSection = () => {
  const { data } = useProductsPage();
  console.log(data);
  return <></>;
};

export default ProductsSection;
