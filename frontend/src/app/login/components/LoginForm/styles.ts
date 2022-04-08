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
  loginFormButton: {
    "&:hover": {
      backgroundColor: colors.persianBlue,
    },
    border: "none",
    cursor: "pointer",
    margin: "3.75rem 0 1rem 0",
    color: colors.white,
    backgroundColor: colors.dogerBlue,
    height: mixins.standardInputHeight,
    borderRadius: mixins.buttonsBorderRadius,
  },
  loginFormTextField: {
    paddingLeft: "1rem",
    marginBottom: "0.5rem",
    height: mixins.standardInputHeight,
    width: mixins.standardInputWeight,
    outline: "none",
    border: mixins.standardTextFieldBorder,
    borderRadius: mixins.standardBorderRadius,
    "&::placeholder": {
      color: colors.coolGrey,
    },
  },
  loginFormForgotPasswordLink: {
    color: colors.coolGrey,
  },
});

export default useLoginFormStyles;
