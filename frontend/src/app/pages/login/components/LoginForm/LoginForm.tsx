import React, { useState } from "react";
import useLoginFormStyles from "./styles";
import { ReactComponent as Logo } from "../../../../../img/icons/logo.svg";
import { Link } from "react-router-dom";
import { useLoginForm } from "../../hooks";
import Button from "app/components/Button/Button";
import InputTextField from "app/components/InputTextField/InputTextField";
import { Credentials } from "./types";
import { Formik, ErrorMessage } from "formik";

const LoginForm = () => {
  const classes = useLoginFormStyles();
  const { onFinish, validationSchema } = useLoginForm();
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  const onInputChangeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    const name = e.currentTarget.name;
    setCredentials({ ...credentials, [name]: e.currentTarget.value });
  };

  return (
    <div className={classes.loginFormContainer}>
      <Logo className={classes.loginFormIcon} />
      <Formik
        onSubmit={onFinish}
        initialValues={credentials}
        enableReinitialize
        {...{ validationSchema }}
      >
        {({ handleSubmit }) => (
          <form className={classes.loginForm} onSubmit={handleSubmit}>
            <h2 className={classes.loginFormHeader}>Login</h2>
            <div>
              <InputTextField
                labelValue="Username"
                onInputChangeHandler={onInputChangeHandler}
                name="username"
                placeholder="Enter username"
                type="text"
              />
            </div>
            <div>
              <InputTextField
                labelValue="Password"
                onInputChangeHandler={onInputChangeHandler}
                name="password"
                placeholder="Enter password"
                type="password"
              />
              <ErrorMessage name="loginFormPasswordField" />
            </div>
            <Button textValue="Log in" isSubmitButton />
            <Link
              className={classes.loginFormForgotPasswordLink}
              to="/forgot-password"
            >
              Forgot password?
            </Link>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
