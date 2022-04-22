import { Credentials } from "app/pages/login/components/LoginForm/types";
import { createContext, useContext, useState, FC } from "react";
import { basicInstance } from "../utils/api";
import { USERS_LOGIN } from "utils/endpoints";
import { AxiosResponse } from "axios";
import { AuthContextType } from "./AuthContext.types";

const login = ({ username, password }: Credentials): Promise<AxiosResponse> =>
  basicInstance.post(USERS_LOGIN, {
    username,
    password,
  });

const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  logout: () => {},
  login,
});

const AuthProvider: FC = (props) => {
  const [loggedIn, setLoggIn] = useState(false);

  const logout = () => {};

  const authContextValue = {
    login,
    loggedIn,
    logout,
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
