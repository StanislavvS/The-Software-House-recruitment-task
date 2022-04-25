import React from "react";
import { ButtonProps } from "./types";
import useButtonStyles from "./styles";

const Button = ({
  isDisabled,
  textValue,
  isSubmitButton,
  onClickAction,
  buttonClassName,
}: ButtonProps) => {
  const setButtonType = () => (isSubmitButton ? "submit" : "button");

  const classes = useButtonStyles();

  return (
    <button
      className={
        buttonClassName === "productCardButton"
          ? `${classes.button} ${classes.productCardButton}`
          : `${classes.button} ${classes.loginButton}`
      }
      disabled={isDisabled}
      type={setButtonType()}
      onClick={onClickAction}
    >
      {textValue}
    </button>
  );
};

export default Button;
