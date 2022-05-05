import React from "react";
import { render, screen, fireEvent, waitFor } from "tests";
import LoginForm from "../LoginForm";
import { AuthProvider } from "providers/auth-context";
import { apiCall } from "../../../../../../utils/api";
import { MOCK_LOGIN_DATA } from "./mockData";
import { createBrowserHistory } from "history";
import MockAdapter from "axios-mock-adapter";
import { USERS_LOGIN } from "utils/endpoints";

const history = createBrowserHistory();

describe("LoginForm", () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(apiCall);
    mock.onPost(USERS_LOGIN).reply(200, MOCK_LOGIN_DATA);
  });

  it("Show error message, when no username or password is provided", async () => {
    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    const userNameTextField = screen.getAllByTestId("input-text-field")[0];
    const passwordTextField = screen.getAllByTestId("input-text-field")[1];
    const loginButton = screen.getByTestId("login-button");
    const spyPost = jest.spyOn(apiCall, "post");
    const valueToChange = "";

    fireEvent.blur(userNameTextField, { target: { value: valueToChange } });

    await waitFor(() => {
      expect(
        screen.getByText("Please enter your username")
      ).toBeInTheDocument();
    });

    fireEvent.blur(passwordTextField, { target: { value: valueToChange } });

    await waitFor(() => {
      expect(
        screen.getByText("Please enter your password")
      ).toBeInTheDocument();
    });

    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(spyPost).toBeCalledTimes(0);
    });
  });

  it("Redirect to product page after passing correct credentials", async () => {
    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    const spyPost = jest.spyOn(apiCall, "post");

    const userNameTextField = screen.getAllByTestId("input-text-field")[0];
    const passwordTextField = screen.getAllByTestId("input-text-field")[1];
    const loginButton = screen.getByTestId("login-button");

    fireEvent.change(userNameTextField, { target: { value: "staszek96" } });
    fireEvent.change(passwordTextField, { target: { value: "asdadsadsa" } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(spyPost).toBeCalledTimes(1);
      expect(history.location.pathname).toBe("/");
    });
  });

  it("Show Error notification after passing wrong credentials", async () => {
    apiCall.post = jest
      .fn()
      .mockImplementation(
        () => new Promise((resolve) => resolve({ status: 401, data: {} }))
      );

    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    const userNameTextField = screen.getAllByTestId("input-text-field")[0];
    const passwordTextField = screen.getAllByTestId("input-text-field")[1];
    const loginButton = screen.getByTestId("login-button");

    fireEvent.change(userNameTextField, { target: { value: "staszek9" } });
    fireEvent.change(passwordTextField, { target: { value: "asdadsa" } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(
        screen.getByText("User pass wrong username or password")
      ).toBeInTheDocument();
    });
  });
});
