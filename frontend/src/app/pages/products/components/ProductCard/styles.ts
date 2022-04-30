import { createUseStyles } from "react-jss";
import { colors, mixins } from "styles/variables";
import "antd/dist/antd.css";

export const useProductCardStyles = createUseStyles({
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
  productCardImageIsNotActive: {
    opacity: "0.5",
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
  productCardRatingStar: {
    cursor: "pointer",
  },
});
