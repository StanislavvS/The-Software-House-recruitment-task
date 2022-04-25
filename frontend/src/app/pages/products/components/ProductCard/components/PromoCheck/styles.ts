import { createUseStyles } from "react-jss";
import { colors } from "styles/variables";

export const usePromoCheckStyles = createUseStyles({
  promo: {
    width: "4.688rem",
    height: "1.5rem",
    backgroundColor: colors.seaBuckthorn,
    color: colors.white,
    textAlign: "center",
    position: "absolute",
    top: "20%",
  },
  promoDisabled: {
    display: "none",
  },
});
