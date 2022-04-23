import { createUseStyles } from "react-jss";
import { colors, mixins } from "styles/variables";

const useTextFiledStyles = createUseStyles({
  textFieldContainer: {
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    paddingLeft: "1rem",
    marginBottom: "0.5rem",
    height: mixins.standardInputHeight,
    width: mixins.standardInputWidth,
    outline: "none",
    border: mixins.standardTextFieldBorder,
    borderRadius: mixins.standardBorderRadius,
  },
  textFieldValid: {
    border: mixins.standardTextFieldBorder,
    "&::placeholder": {
      color: colors.coolGrey,
    },
  },
  textFieldInvalid: {
    border: mixins.errorTextFieldBorder,
    "&::placeholder": {
      color: colors.punch,
    },
  },
  label: {
    margin: "0 0 0.5rem 0",
    display: "block",
  },
  error: {
    color: colors.punch,
  },

  "@media screen and (max-width: 768px)": {
    textField: {
      width: mixins.mobileInputWidth,
    },
  },
});

export default useTextFiledStyles;
