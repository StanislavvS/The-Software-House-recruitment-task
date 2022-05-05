import React from "react";

import { render, screen } from "tests";

import { Login } from "./Login";

describe("Login", () => {
  test("Displays all information", async () => {
    render(<Login />);

    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.getAllByTestId("input-text-field").length).toBe(2);
    expect(screen.getByTestId("login-page-image")).toBeInTheDocument();
    expect(screen.getByTestId("forgoten-password-link")).toBeInTheDocument();
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByTestId("login-button"));
  });
});
