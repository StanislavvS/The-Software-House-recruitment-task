import { useAuth } from "providers/auth-context";
import AvatarImage from "../../../../../img/Avatar.png";
import { useAvatarStyles } from "./styles";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const UserAvatar = () => {
  const { logout } = useAuth();
  const classes = useAvatarStyles();

  return (
    <>
      <Tippy
        className={classes.tooltip}
        interactive={true}
        content={
          <button
            className={classes.tooltipButton}
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        }
        arrow={false}
      >
        <img
          data-testid="avatar-image"
          className={classes.avatar}
          src={AvatarImage}
          alt="userAvatar"
        />
      </Tippy>
    </>
  );
};

export default UserAvatar;
