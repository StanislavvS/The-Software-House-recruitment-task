import { createUseStyles } from "react-jss";

export const useProductViewStyles = createUseStyles({
  productViewImage: {
    objectFit: "cover",
    width: "110%",
    marginTop: "-5%",
    marginLeft: "-5%",
    zIndex: "-1",
  },
  productViewHeader: {
    marginTop: "5%",
  },
  productViewArticle: {
    marginTop: "8%",
  },
});
