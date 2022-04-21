import React, { useState } from "react";
import useLoginFormStyles from "./styles";
import { ReactComponent as Logo } from "../../../../../img/icons/logo.svg";
import { Link } from "react-router-dom";
import { useLoginForm } from "../../hooks";
import Button from "app/components/Button/Button";
import InputTextField from "app/components/InputTextField/InputTextField";
import { Credentials } from "./types";
import { Formik } from "formik";

const LoginForm = () => {
  const classes = useLoginFormStyles();
  const { onFinish, validationSchema } = useLoginForm();
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  return (
    <Formik
      onSubmit={onFinish}
      initialValues={credentials}
      {...{ validationSchema }}
    >
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
    </Formik>
  );
};

export default LoginForm;
