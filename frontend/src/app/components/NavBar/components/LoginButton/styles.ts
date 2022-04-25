import { createUseStyles } from "react-jss";
import { colors, mixins } from "../../../../../styles/variables";

export const useLoginButtonStyles = createUseStyles({
  loginButton: {
    backgroundColor: colors.white,
    border: mixins.loginButtonBorder,
    color: colors.dogerBlue,
    borderRadius: mixins.standardBorderRadius,
    height: mixins.smallButtonHeight,
    width: mixins.smallButtonWidth,
    cursor: "pointer",
    "&:hover": {
      color: colors.persianBlue,
      border: mixins.smallButtonHoverBorder,
    },
  },
});
