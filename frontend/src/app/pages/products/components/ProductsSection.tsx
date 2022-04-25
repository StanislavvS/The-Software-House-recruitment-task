import Spinner from "app/components/Spinner/Spinner";
import { useProducts } from "providers/ProductsProvider";
import React from "react";
import { useProductsPage } from "../hooks";

const ProductsSection = () => {
  const { isLoading } = useProductsPage();
  const { products } = useProducts();

  if (isLoading) return <Spinner />;

  return <></>;
};

export default ProductsSection;
