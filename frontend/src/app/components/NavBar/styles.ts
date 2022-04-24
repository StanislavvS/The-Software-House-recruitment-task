import { createUseStyles } from "react-jss";
import { colors } from "styles/variables";

export const useNavBarStyles = createUseStyles({
  navBarContainer: {
    height: "12%",
    backgroundColor: colors.white,
    width: "100vw",
  },
  navBar: {
    height: "100%",
    marginLeft: "6.75rem",
    display: "flex",
    listStyle: "none",
  },
  navBarFirstColumn: {
    alignItems: "center",
    display: "flex",
    width: "45%",
    justifyContent: "space-between",
  },
  navBarSecondColumn: {
    alignItems: "center",
    display: "flex",
    width: "50%",
    justifyContent: "space-between",
  },
  navBarCheckBox: {
    display: "inline-block",
    marginLeft: "1.5rem",
  },
});
