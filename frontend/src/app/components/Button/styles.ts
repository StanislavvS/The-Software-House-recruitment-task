import { createUseStyles } from "react-jss";
import { colors, mixins } from "../../../styles/variables";

const useButtonStyles = createUseStyles({
  button: {
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
});

export default useButtonStyles;
