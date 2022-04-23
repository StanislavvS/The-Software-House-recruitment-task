import React, { useCallback, useState, useEffect, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../../providers/auth-context";
import { generatePath } from "react-router";
import { useMutation } from "react-query";
import { Credentials } from "./components/LoginForm/types";
import * as Yup from "yup";
import { DataLoginResponse } from "providers/AuthContext.types";

export const useLoginForm = () => {
  const history = useHistory();
  const { login, logout, user, setUser } = useAuth();

  const { mutate } = useMutation(
    ({ username, password }: Credentials) => login({ username, password }),
    {
      onSuccess: (data) => {
        setUser({
          ...user,
          username: data.user.username,
          avatar: data.user.avatar,
          id: data.user.id,
        });
      },
      onError: (error) => {
        console.log(error);
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

  return { onFinish, validationSchema };
};
