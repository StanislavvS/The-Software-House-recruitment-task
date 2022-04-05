import React from "react";
import useLoginFormStyles from "./styles";
import { ReactComponent as Logo } from "../../../../img/icons/logo.svg";
const LoginForm = () => {
  const classes = useLoginFormStyles();

  return (
    <div className={classes.loginFormContainer}>
      <Logo className={classes.loginFormIcon} />
      <form className={classes.loginForm}>
        <h2 className={classes.loginFormHeader}>Login</h2>
        <div>
          <label>
            username:
            <input name="username" />
          </label>
        </div>
        <div>
          <label>
            password:
            <input name="password" type="password" />
          </label>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
