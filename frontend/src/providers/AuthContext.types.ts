import { Credentials } from "app/pages/login/components/LoginForm/types";
import { AxiosResponse } from "axios";

export type AuthContextType = {
  user: User;
  logout: () => void;
  login: ({ username, password }: Credentials) => Promise<DataLoginResponse>;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export type User = UserData & { isAuth: boolean };

export type UserData = {
  avatar: string;
  id: number;
  username: string;
};

export type DataLoginResponse = {
  access_token: string;
  expiresIn: string;
  user: UserData;
};
