import React, { useState, useEffect } from "react";
import { useProducts } from "providers/ProductsProvider";
import { useProductViewStyles } from "./styles";
import { Product } from "../../../../../../../providers/ProductsProvider.types";
const ProductView = () => {
  const { currentProductId, products } = useProducts();
  const [currentProduct] = useState<Product | undefined>(
    products.find((product) => product.id === currentProductId)
  );
  const classes = useProductViewStyles();

  return (
    <div>
      <img
        className={classes.productViewImage}
        src={currentProduct?.image}
        alt="Current Product Image"
      />
      <h2 className={classes.productViewHeader}>{currentProduct?.name}</h2>
      <article>{currentProduct?.description}</article>
    </div>
  );
};

export default ProductView;
