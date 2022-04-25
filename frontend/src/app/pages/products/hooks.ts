import { useQuery } from "react-query";
import { useProducts } from "providers/ProductsProvider";

export const useProductsPage = () => {
  const { getProductsFromBackend } = useProducts();
  const { data, isLoading } = useQuery("products", getProductsFromBackend);
  return {
    data,
  };
};
