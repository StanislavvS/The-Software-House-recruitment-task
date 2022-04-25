import { useAuth } from "providers/auth-context";
import AvatarImage from "../../../../../img/Avatar.png";
import { useAvatarStyles } from "./styles";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useRef } from "react";

const UserAvatar = () => {
  const { user } = useAuth();
  const classes = useAvatarStyles();
  const ref = useRef();

  return (
    <>
      <Tippy
        className={classes.tooltip}
        interactive={true}
        content={
          <button
            className={classes.tooltipButton}
            onClick={() => {
              console.log("dupa");
            }}
          >
            Logout
          </button>
        }
        arrow={false}
      >
        <img className={classes.avatar} src={AvatarImage} alt="userAvatar" />
      </Tippy>
    </>
  );
};

export default UserAvatar;
