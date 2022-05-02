import { createUseStyles } from "react-jss";
import { colors, mixins } from "../../../styles/variables";

const useButtonStyles = createUseStyles({
  button: {
    "&:hover": {
      backgroundColor: colors.persianBlue,
    },
    "&:disabled": {
      cursor: "not-allowed",
      backgroundColor: colors.coolGrey,
    },
    border: "none",
    cursor: "pointer",

    color: colors.white,
    backgroundColor: colors.dogerBlue,

    borderRadius: mixins.buttonsBorderRadius,
  },
  loginButton: {
    margin: "3.75rem 0 1rem 0",
    height: mixins.standardInputHeight,
  },

  productCardButton: {
    height: "2.2rem",
    marginTop: "1rem",
    marginBottom: "7%",
    width: "100%",
  },
});

export default useButtonStyles;
