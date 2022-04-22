import React from "react";
import { InputTextFieldProps } from "./types";
import useTextFiledStyles from "./styles";

const InputTextField = ({
  placeholder,
  type,
  name,
  id,
  onInputChangeHandler,
}: InputTextFieldProps) => {
  const classes = useTextFiledStyles();

  return (
    <>
      <input
        onChange={onInputChangeHandler}
        className={classes.textField}
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
      ></input>
    </>
  );
};

export default InputTextField;
