import React from "react";
import { renderWithClient } from "tests/utils";
import { server } from "setupTests";
import ProductsSection from "../ProductsSection";
import ProductCard from "../../ProductCard/ProductCard";

describe("Product section", () => {
  it("Render product section", async () => {
    const result = renderWithClient(<ProductsSection />);
  });
});
