import { createUseStyles } from "react-jss";
import { colors, mixins } from "styles/variables";

const useTextFiledStyles = createUseStyles({
  textField: {
    paddingLeft: "1rem",
    marginBottom: "0.5rem",
    height: mixins.standardInputHeight,
    width: mixins.standardInputWidth,
    outline: "none",
    border: mixins.standardTextFieldBorder,
    borderRadius: mixins.standardBorderRadius,
    "&::placeholder": {
      color: colors.coolGrey,
    },
  },
  "@media screen and (max-width: 768px)": {
    textField: {
      width: mixins.mobileInputWidth,
    },
  },
});

export default useTextFiledStyles;
