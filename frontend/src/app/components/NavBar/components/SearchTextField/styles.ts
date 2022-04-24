import { createUseStyles } from "react-jss";
import { mixins, colors } from "styles/variables";

export const useSearchTextField = createUseStyles({
  searchTextFieldContainer: {
    position: "relative",
  },
  searchTextFieldLogo: {
    position: "absolute",
    left: "90%",
    top: "28%",
  },
  searchTextField: {
    paddingLeft: "1rem",
    outline: "none",
    width: mixins.standardSearchFieldWidth,
    height: mixins.standardInputHeight,
    border: mixins.standardTextFieldBorder,
    borderRadius: mixins.standardBorderRadius,
    "&::placeholder": {
      color: colors.black,
      font: "600, Semi Bold",
    },
  },
});
