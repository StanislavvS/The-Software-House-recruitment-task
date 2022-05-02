import { colors } from "../../../styles/variables";
import { createUseStyles } from "react-jss";

export const useProductsPage = createUseStyles({
  productsPage: {
    backgroundColor: colors.athensGray,
    height: "175vh",
  },
  "@media screen and (max-width: 768px)": {
    productsPage: {
      height: "890vh",
    },
  },
});
