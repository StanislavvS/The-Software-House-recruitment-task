import { useCallback, useState, useEffect, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../../providers/auth-context";
import { generatePath } from "react-router";
import { Credentials } from "./components/LoginForm/types";
import * as Yup from "yup";

export const useLoginForm = () => {
  const history = useHistory();
  const { login, logout, loggedIn } = useAuth();

  // const errorMessage = useMemo(() => {
  //   switch(error)
  // })

  const [isLoading, setIsLoading] = useState(false);
  const onFinish = useCallback(async ({ username, password }: Credentials) => {
    login({ username, password });
  }, []);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Please enter your username"),
    password: Yup.string().required("Please enter your password"),
  });

  return { onFinish, validationSchema };
};
