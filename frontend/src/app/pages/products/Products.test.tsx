import React from "react";

import { render, screen } from "tests";

import { Products } from "./Products";

describe("Products", () => {
  test("Displays products page", () => {
    render(<Products />);
  });
});
