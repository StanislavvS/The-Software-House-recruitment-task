import { createUseStyles } from "react-jss";
import { colors } from "styles/variables";

export const useAvatarStyles = createUseStyles({
  avatar: {
    borderRadius: "50%",
  },
  tooltip: {
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.25)",
    backgroundColor: `${colors.white} !important`,
  },
  tooltipContainer: {
    display: "flex",
    justifyContent: "center",
  },
  tooltipButton: {
    border: "none",
    cursor: "pointer",
    textAlign: "left",
    backgroundColor: colors.white,
    color: colors.eerieBlack,
    font: " 600, Semi Bold",
    width: "10rem",
    height: "3rem",
  },
});
