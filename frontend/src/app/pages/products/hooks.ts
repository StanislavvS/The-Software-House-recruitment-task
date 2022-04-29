import { useQuery } from "react-query";
import { useProducts } from "providers/ProductsProvider";
import "antd/dist/antd.css";
import { notification } from "antd";

export const useProductsPage = () => {
  const { getProductsFromBackend, setProducts } = useProducts();

  const openNotification = () => {
    const args = {
      message: "Error ocured",
      description: "Something went wrong when products was fetching",
      duration: 3,
    };
    notification.open(args);
  };
  const { isLoading } = useQuery("products", getProductsFromBackend, {
    onSuccess: (data) => {
      setProducts(data.items);
      console.log(data.items);
    },
    onError: () => {
      openNotification();
    },
  });
  return {
    isLoading,
  };
};
