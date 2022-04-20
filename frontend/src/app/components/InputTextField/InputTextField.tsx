import React from "react";
import { InputTextFieldProps } from "./types";
import useTextFiledStyles from "./styles";

const InputTextField = ({
  placeholder,
  type,
  name,
  id,
}: InputTextFieldProps) => {
  const classes = useTextFiledStyles();

  return (
    <>
      <input
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
