import React from "react";
import useLoginFormStyles from "./styles";
import { ReactComponent as Logo } from "../../../../img/icons/logo.svg";
import { Link } from "react-router-dom";
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
          <input
            className={classes.loginFormTextField}
            id="loginFormUsernameField"
            name="username"
            placeholder="Enter username"
          />
        </div>
        <div>
          <label
            className={classes.loginFormLabel}
            htmlFor="loginFormPasswordField"
          >
            Password
          </label>
          <input
            id="loginFormPasswordField"
            className={classes.loginFormTextField}
            name="password"
            placeholder="Enter password"
            type="password"
          />
        </div>
        <button className={classes.loginFormButton} type="submit">
          Log in
        </button>
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
