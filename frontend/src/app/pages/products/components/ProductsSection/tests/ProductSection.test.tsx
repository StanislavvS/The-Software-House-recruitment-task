import React from "react";
import { render } from "tests";
import { renderWithClient } from "tests/utils";
import ProductsSection from "../ProductsSection";

describe("Product section", () => {
  it("Render product section", () => {
    render(<ProductsSection />);
  });
});
