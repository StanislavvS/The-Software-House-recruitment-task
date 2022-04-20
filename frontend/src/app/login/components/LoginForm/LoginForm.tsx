import React from "react";
import useLoginFormStyles from "./styles";
import { ReactComponent as Logo } from "../../../../img/icons/logo.svg";
import { Link } from "react-router-dom";
import Button from "components/Button/Button";
import InputTextField from "components/InputTextField/InputTextField";
const LoginForm = () => {
  const classes = useLoginFormStyles();

  return (
    <div className={classes.loginFormContainer}>
      <Logo className={classes.loginFormIcon} />
      <form className={classes.loginForm}>
        <h2 className={classes.loginFormHeader}>Login</h2>
        <div>
          <label
            className={classes.loginFormLabel}
            htmlFor="loginFormUsernameField"
          >
            Username
          </label>
          <InputTextField
            name="username"
            placeholder="Enter username"
            id="loginFormUsernameField"
            type="text"
          />
        </div>
        <div>
          <label
            className={classes.loginFormLabel}
            htmlFor="loginFormPasswordField"
          >
            Password
          </label>
          <InputTextField
            name="password"
            placeholder="Enter password"
            id="loginFormPasswordField"
            type="password"
          />
        </div>
        <Button textValue="Log in" isSubmitButton />
        <Link
          className={classes.loginFormForgotPasswordLink}
          to="/forgot-password"
        >
          Forgot password?
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
