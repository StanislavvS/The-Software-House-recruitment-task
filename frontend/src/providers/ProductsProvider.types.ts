import React from "react";

export type ProductsContextType = {
  products: Product[];
  getProductsFromBackend: () => Promise<ProductDataFromServer>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setCurrentProductId: React.Dispatch<React.SetStateAction<number>>;
  currentProductId: number;
};

export type ProductDataFromServer = {
  items: Product[];
  links: {
    first: string;
    last: string;
    next: string;
    previous: string;
  };
  meta: {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
};

export type Product = {
  active: boolean;
  description: string;
  id: number;
  image: string;
  name: string;
  promo: boolean;
  rating: number;
};
