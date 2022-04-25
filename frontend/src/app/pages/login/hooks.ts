import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../providers/auth-context";
import { useMutation } from "react-query";
import { Credentials } from "./components/LoginForm/types";
import "antd/dist/antd.css";
import { notification } from "antd";
import * as Yup from "yup";

export const useLoginForm = () => {
  const history = useHistory();
  const { login, logout, user, setUser } = useAuth();

  const openNotification = () => {
    const args = {
      message: "Error ocured",
      description: "User pass wrong username or password",
      duration: 3000,
    };
    notification.open(args);
  };

  const { mutate, isLoading } = useMutation(
    ({ username, password }: Credentials) => login({ username, password }),
    {
      onSuccess: (data) => {
        setUser({
          isAuth: true,
          username: data.user.username,
          avatar: data.user.avatar,
          id: data.user.id,
        });

        localStorage.setItem("jwt", data.access_token);
        localStorage.setItem("user", JSON.stringify(data.user));

        history.replace("/");
      },
      onError: (error) => {
        openNotification();
      },
    }
  );

  const onFinish = useCallback(async (values) => {
    const { username, password }: Credentials = values;
    mutate({ username, password });
  }, []);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Please enter your username"),
    password: Yup.string().required("Please enter your password"),
  });

  return { onFinish, validationSchema, isLoading };
};
