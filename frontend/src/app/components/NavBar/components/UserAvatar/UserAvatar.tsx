import { useAuth } from "providers/auth-context";
import AvatarImage from "../../../../../img/Avatar.png";
import { useAvatarStyles } from "./styles";
import React from "react";

const UserAvatar = () => {
  const { user } = useAuth();
  const classes = useAvatarStyles();

  return (
    <>
      <img className={classes.avatar} src={AvatarImage} alt="userAvatr" />
    </>
  );
};

export default UserAvatar;
