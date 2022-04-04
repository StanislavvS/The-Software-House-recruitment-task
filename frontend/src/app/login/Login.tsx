import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";
import LoginForm from "./components/LoginForm/LoginForm";
import LoginPhoto from "./components/LoginPhoto/LoginPhoto";
import useLoginPageStyles from "./styles";

export const Login = () => {
  const classes = useLoginPageStyles();

  return (
    <div className={classes.login}>
      <LoginPhoto />
      <LoginForm />
    </div>
  );
};
