import { createUseStyles } from "react-jss";
import { colors } from "styles/variables";

export const useNavBarStyles = createUseStyles({
  navBarContainer: {
    height: "12%",
    backgroundColor: colors.white,
    width: "100vw",
    position: "fixed",
  },
  navBarMobile: {
    display: "none",
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
  navBarMobileFirstColumn: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  "@media screen and (max-width: 768px)": {
    navBarCheckBox: {
      marginTop: "4%",
      display: "inline-block",
      "&:last-of-type": {
        marginLeft: "5%",
      },
      marginLeft: 0,
    },
    navBar: {
      display: "none",
    },
    navBarContainer: {
      height: "35%",
    },
    navBarMobile: {
      listStyle: "none",
      padding: "3.313rem 1.5rem 2rem 1.5rem",

      display: "flex",
      flexDirection: "column",
    },
  },
});
