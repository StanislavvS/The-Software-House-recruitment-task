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
});

const ProductsProvider: FC = (props) => {
  const [products, setProducts] = useState<Product[]>([]);

  const productsContextValue = {
    getProductsFromBackend,
    products,
    setProducts,
  };

  return <ProductsContext.Provider value={productsContextValue} {...props} />;
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
