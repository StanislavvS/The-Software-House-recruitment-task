import { createUseStyles } from "react-jss";
import { colors, mixins } from "styles/variables";

const useLoginFormStyles = createUseStyles({
  loginFormContainer: {
    width: "70%",
    height: "100vh",
    display: "flex",
    position: "relative",
    marginLeft: "10%",
  },
  loginFormLabel: {
    margin: "0 0 0.5rem 0",
    display: "block",
  },

  loginForm: {
    margin: "auto 0 auto 0",
    display: "flex",
    flexDirection: "column",
  },
  loginFormHeader: {
    fontSize: mixins.headerMediumSize,
  },
  loginFormIcon: {
    top: "7%",
    position: "absolute",
  },

  loginFormTextField: {},
  loginFormForgotPasswordLink: {
    color: colors.coolGrey,
  },
  "@media screen and (max-width: 768px)": {
    loginFormContainer: {
      maxWidth: mixins.mobileLoginContainerWidth,
    },
  },
});

export default useLoginFormStyles;
