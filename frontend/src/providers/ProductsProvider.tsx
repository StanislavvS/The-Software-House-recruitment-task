import { createContext, useContext, FC, useState } from "react";
import basicInstance from "utils/api";
import { GET_PRODUCTS } from "utils/endpoints";
import {
  Product,
  ProductsContextType,
  FilterOptions,
} from "./ProductsProvider.types";

const getProductsFromBackend = () =>
  basicInstance.get(GET_PRODUCTS).then((res) => res.data);

export const initialFiltersOption: FilterOptions = {
  filterTextValue: "",
  promo: false,
  active: false,
};

const ProductsContext = createContext<ProductsContextType>({
  setProducts: () => {},
  products: [],
  getProductsFromBackend,
  setCurrentProductId: () => {},
  currentProductId: -1,
  filtersOption: initialFiltersOption,
  setFiltersOption: () => {},
});

const ProductsProvider: FC = (props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentProductId, setCurrentProductId] = useState<number>(-1);
  const [filtersOption, setFiltersOption] =
    useState<FilterOptions>(initialFiltersOption);

  const productsContextValue = {
    filtersOption,
    setFiltersOption,
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
