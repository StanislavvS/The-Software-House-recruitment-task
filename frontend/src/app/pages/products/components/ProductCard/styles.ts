import { createUseStyles } from "react-jss";
import { colors, mixins } from "styles/variables";

export const useProductCard = createUseStyles({
  productCard: {
    borderRadius: "8px",
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
    display: "inline-block",
    possition: "relative",
  },
  productCardImage: {
    width: "100%",
    height: "45%",
    objectFit: "cover",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
  productCardContentContainer: {
    margin: "4% 4% 0% 4%",
  },
  productCardStarsContainer: {
    width: "40%",
    display: "flex",
    margin: "5rem 0  0 -2%",
    justifyContent: "space-evenly",
  },
  productCardArticle: {
    maxHeight: "2.5rem",
    height: "2rem",
  },
  productCardHeader: {
    height: "2rem",
  },
});
