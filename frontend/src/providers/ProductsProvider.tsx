import { createContext, useContext, FC, useState } from "react";
import basicInstance from "utils/api";
import { GET_PRODUCTS } from "utils/endpoints";
import { ProductsContextType } from "./ProductsProvider.types";

const getProducts = () =>
  basicInstance.get(GET_PRODUCTS).then((res) => res.data);

const ProductsContext = createContext<ProductsContextType>({
  products: undefined,
  getProducts,
});

const ProductsProvider: FC = (props) => {
  const [products, setProducts] = useState(undefined);

  const productsContextValue = {
    getProducts,
    products,
    setProducts,
  };

  return <ProductsContext.Provider value={productsContextValue} />;
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
