import Spinner from "app/components/Spinner/Spinner";
import LoginForm from "./components/LoginForm/LoginForm";
import LoginPhoto from "./components/LoginPhoto/LoginPhoto";
import { useLoginForm } from "./hooks";
import useLoginPageStyles from "./styles";

export const Login = () => {
  const classes = useLoginPageStyles();

  const { isLoading } = useLoginForm();

  if (isLoading) return <Spinner />;

  return (
    <div className={classes.login}>
      <LoginPhoto />
      <LoginForm />
    </div>
  );
};
