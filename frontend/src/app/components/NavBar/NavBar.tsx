import React from "react";
import { useNavBarStyles } from "./styles";
import { ReactComponent as Logo } from "../../../img/icons/logo.svg";
import { Checkbox } from "antd";
import SearchTextField from "./components/SearchTextField/SearchTextField";
import LoginButton from "./components/LoginButton/LoginButton";
import UserAvatar from "./components/UserAvatar/UserAvatar";
import { useAuth } from "providers/auth-context";

const NavBar = () => {
  const classes = useNavBarStyles();
  const { user } = useAuth();

  console.log(user);

  const renderCheckBox = (): JSX.Element => {
    return (
      <div>
        <li className={classes.navBarCheckBox}>
          <Checkbox>Active</Checkbox>
        </li>
        <li className={classes.navBarCheckBox}>
          <Checkbox>Promo</Checkbox>
        </li>
      </div>
    );
  };
  return (
    <nav className={classes.navBarContainer}>
      <ul className={classes.navBar}>
        <div className={classes.navBarFirstColumn}>
          <li>
            <Logo />
          </li>
          <li>
            <SearchTextField />
          </li>
        </div>
        <div className={classes.navBarSecondColumn}>
          {renderCheckBox()}
          <li>{user.isAuth ? <UserAvatar /> : <LoginButton />}</li>
        </div>
      </ul>
      <ul className={classes.navBarMobile}>
        <li className={classes.navBarMobileFirstColumn}>
          <Logo />
          {user.isAuth ? <UserAvatar /> : <LoginButton />}
        </li>
        <li>
          <SearchTextField />
        </li>
        {renderCheckBox()}
      </ul>
    </nav>
  );
};

export default NavBar;
