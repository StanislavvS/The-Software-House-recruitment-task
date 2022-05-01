import React from "react";
import { useProducts } from "providers/ProductsProvider";

export const useNavBar = () => {
  const { setFiltersOption, filtersOption } = useProducts();

  const onCheckboxChangeHandler = (e: any): void => {
    const name = e.target.name;
    name === "promo"
      ? setFiltersOption({ ...filtersOption, [name]: !filtersOption.promo })
      : setFiltersOption({ ...filtersOption, [name]: !filtersOption.active });
  };

  const onInputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFiltersOption({
      ...filtersOption,
      filterTextValue: e.currentTarget.value,
    });
  };

  return { onCheckboxChangeHandler, onInputChangeHandler };
};
