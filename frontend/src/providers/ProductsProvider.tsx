import { createContext, useContext, FC, useState } from "react";
import basicInstance from "utils/api";
import { GET_PRODUCTS } from "utils/endpoints";
import { Product, ProductsContextType } from "./ProductsProvider.types";

const getProductsFromBackend = () =>
  basicInstance.get(GET_PRODUCTS).then((res) => res.data);

const ProductsContext = createContext<ProductsContextType>({
  setProducts: () => {},
  products: [],
  getProductsFromBackend,
  setCurrentProductId: () => {},
  currentProductId: -1,
});

const ProductsProvider: FC = (props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentProductId, setCurrentProductId] = useState<number>(-1);

  const productsContextValue = {
    getProductsFromBackend,
    products,
    setProducts,
    currentProductId,
    setCurrentProductId,
  };

  return <ProductsContext.Provider value={productsContextValue} {...props} />;
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
