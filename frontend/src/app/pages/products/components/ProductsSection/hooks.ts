import { Product } from "providers/ProductsProvider.types";
import { useEffect, useState } from "react";
import { useProducts } from "providers/ProductsProvider";
import { PaginationValues } from "./types";

export const usePagination = () => {
  const { products, filtersOption } = useProducts();
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);

  const checkFiltersOptions = (): boolean =>
    filtersOption.active ||
    filtersOption.promo ||
    filtersOption.filterTextValue !== "";

  const [paginationValues, setPaginationValues] = useState<PaginationValues>({
    selectedPage: 0,
  });

  const itemsPerPage = 8;
  const pagesVisted = paginationValues.selectedPage + itemsPerPage;

  useEffect(() => {
    setFilterProducts(
      products.filter(
        ({ name, promo, active }) =>
          active === filtersOption.active &&
          promo === filtersOption.promo &&
          name.toLowerCase().includes(filtersOption.filterTextValue)
      )
    );
  }, [
    filtersOption.active,
    filtersOption.promo,
    filtersOption.filterTextValue,
  ]);

  return {
    paginationValues,
    setPaginationValues,
    itemsPerPage,
    pagesVisted,
    products: checkFiltersOptions() ? filterProducts : products,
  };
};
