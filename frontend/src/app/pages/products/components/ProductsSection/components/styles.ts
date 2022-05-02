import { createUseStyles } from "react-jss";
import { colors } from "styles/variables";

export const useNoproductFoundStyles = createUseStyles({
  noProductFoundContainer: {
    background: colors.white,
    borderRadius: "8px",
    width: "37.5rem",
    height: "21.5rem",
    margin: "30% 0 0 100%",
    marginTop: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  noProductFoundHeader: {
    marginTop: "3%",
  },
  noProductPargraph: {
    marginTop: "1.5%",
    color: colors.heather,
  },

  "@media screen and (max-width: 768px)": {
    noProductFoundContainer: {
      margin: "10% 0 0 7%",
      width: "30rem",
    },
  },
});
