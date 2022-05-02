import { createUseStyles } from "react-jss";
import { colors } from "styles/variables";

export const useProductsSectionStyles = createUseStyles({
  productsSection: {
    padding: "10%",
    gridTemplateColumns: "23.5% 23.5% 23.5% 23.5%",
    gap: "1.5rem",
    display: "grid",
  },

  productSectionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  productSectionPagination: {
    listStyle: "none",
    height: "20%",
    fontWeight: "bold",
    margin: "auto",
    "& a": {
      color: colors.eerieBlack,
    },
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "10%",
    width: "20%",
  },
});
