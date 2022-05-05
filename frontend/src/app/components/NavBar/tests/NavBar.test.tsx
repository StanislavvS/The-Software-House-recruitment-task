import React from "react";
import { render, screen } from "tests";
import NavBar from "../NavBar";

describe("NavBar", () => {
  test("Should show login button when user is not loggin", () => {
    render(<NavBar />);

    expect(screen.getAllByTestId("login-user-button")[0]).toBeInTheDocument();
  });
});
