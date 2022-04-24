import React from "react";
import { useNavBarStyles } from "./styles";
import { ReactComponent as Logo } from "../../../img/icons/logo.svg";
import { Checkbox } from "antd";
import SearchTextField from "./components/SearchTextField/SearchTextField";
import LoginButton from "./components/LoginButton/LoginButton";

const NavBar = () => {
  const classes = useNavBarStyles();

  return (
    <nav className={classes.navBarContainer}>
      <ul className={classes.navBar}>
        <li className={classes.navBarFirstColumn}>
          <li>
            <Logo />
          </li>
          <li>
            <SearchTextField />
          </li>
        </li>
        <li className={classes.navBarSecondColumn}>
          <li>
            <li className={classes.navBarCheckBox}>
              <Checkbox>Active</Checkbox>
            </li>
            <li className={classes.navBarCheckBox}>
              <Checkbox>Promo</Checkbox>
            </li>
          </li>
          <li>
            <LoginButton />
          </li>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
