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
  },

  productSectionPaginationContainer: {
    marginLeft: "40%",
    width: "20%",
    display: "flex",
    marginBottom: "10%",
  },

  productSectionPaginationButton: {
    border: "none",
    background: "transparent",
    cursor: "pointer",

    "& active": {
      color: colors.heather,
    },
  },

  productSectionPaginationActiveButtonFirst: {
    color: colors.heather,
  },
  productSectionPaginationActiveButtonLast: {
    color: colors.heather,
  },

  productSectionPagination: {
    paddingLeft: "0",
    listStyle: "none",
    height: "20%",
    fontWeight: "bold",
    margin: "auto",
    "& a": {
      color: colors.eerieBlack,
    },
    display: "flex",
    justifyContent: "space-between",

    width: "80%",
  },

  productSectionPaginationActive: {
    "& a": {
      color: colors.persianBlue,
    },
  },

  "@media screen and (max-width: 768px)": {
    productsSection: {
      paddingTop: "50%",
      gridTemplateColumns: "100%",
    },
  },
});
