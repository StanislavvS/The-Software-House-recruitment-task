import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";
import { useLoginButtonStyles } from "./styles";

const LoginButton = () => {
  const classes = useLoginButtonStyles();

  return (
    <Link data-testid="login-user-button" to={AppRoute.Login}>
      <button className={classes.loginButton}>Log in</button>
    </Link>
  );
};

export default LoginButton;
