import React from "react";
import { ButtonProps } from "./types";
import useButtonStyles from "./styles";

const Button = ({ isDisabled, textValue, isSubmitButton }: ButtonProps) => {
  const setButtonType = () => (isSubmitButton ? "submit" : "button");

  const classes = useButtonStyles();

  return (
    <>
      <button
        className={classes.button}
        disabled={isDisabled}
        type={setButtonType()}
      >
        {textValue}
      </button>
    </>
  );
};

export default Button;
