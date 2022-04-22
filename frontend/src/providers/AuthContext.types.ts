import { Credentials } from "app/pages/login/components/LoginForm/types";
import { AxiosResponse } from "axios";

export type AuthContextType = {
  loggedIn: boolean;
  logout: () => void;
  login: ({ username, password }: Credentials) => Promise<AxiosResponse>;
};
