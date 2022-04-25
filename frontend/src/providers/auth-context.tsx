import { Credentials } from "app/pages/login/components/LoginForm/types";
import { createContext, useContext, useState, FC } from "react";
import { basicInstance } from "../utils/api";
import { USERS_LOGIN } from "utils/endpoints";
import { AxiosResponse } from "axios";
import { AuthContextType, DataLoginResponse, User } from "./AuthContext.types";

const initialUserState: User = {
  username: "",
  id: -1,
  isAuth: false,
  avatar: "",
};

const login = ({ username, password }: Credentials) =>
  basicInstance
    .post<Credentials, AxiosResponse<DataLoginResponse>>(USERS_LOGIN, {
      username,
      password,
    })
    .then((res) => res.data);

const AuthContext = createContext<AuthContextType>({
  setUser: () => {},
  user: initialUserState,
  logout: () => {},
  login,
});

const AuthProvider: FC = (props) => {
  const [user, setUser] = useState<User>(initialUserState);

  if (user.id === -1) {
    const user = localStorage.getItem("user");

    if (user) setUser({ isAuth: true, ...JSON.parse(user) });
  }

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");

    setUser(initialUserState);
  };

  const authContextValue = {
    setUser,
    login,
    user,
    logout,
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
