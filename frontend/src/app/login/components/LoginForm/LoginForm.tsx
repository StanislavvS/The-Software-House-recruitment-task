import React from "react";
import useLoginFormStyles from "./styles";

const LoginForm = () => {
  const classes = useLoginFormStyles();

  return (
    <form className={classes.loginForm}>
      <h2>Login</h2>
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
  );
};

export default LoginForm;
