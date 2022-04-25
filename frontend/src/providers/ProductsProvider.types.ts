export type ProductsContextType = {
  products: undefined;
  getProducts: () => Promise<any>;
  setProducts?: React.Dispatch<React.SetStateAction<undefined>>;
};
