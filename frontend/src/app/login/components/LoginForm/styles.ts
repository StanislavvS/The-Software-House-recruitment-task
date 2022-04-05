import { createUseStyles } from "react-jss";

const useLoginFormStyles = createUseStyles({
  loginFormContainer: {
    width: "70%",
    height: "100vh",
    display: "flex",
    position: "relative",
    marginLeft: "10%",
  },
  loginForm: {
    margin: "auto 0 auto 0",
  },
  loginFormHeader: {
    fontSize: "600, Semi Bold",
  },
  loginFormIcon: {
    top: "7%",
    position: "absolute",
  },
});

export default useLoginFormStyles;
