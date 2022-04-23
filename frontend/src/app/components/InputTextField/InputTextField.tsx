import React from "react";
import { InputTextFieldProps } from "./types";
import useTextFiledStyles from "./styles";
import { ErrorMessage, useField } from "formik";

const InputTextField = ({
  placeholder,
  type,
  name,
  labelValue,
  onInputChangeHandler,
}: InputTextFieldProps) => {
  const classes = useTextFiledStyles();
  const [field, meta] = useField({
    placeholder,
    type,
    name,
  });

  return (
    <div className={classes.textFieldContainer}>
      <label className={classes.label} htmlFor={field.name}>
        {labelValue}
      </label>
      <input
        {...field}
        onChange={onInputChangeHandler}
        className={
          meta.touched && meta.error
            ? `${classes.textField} ${classes.textFieldInvalid}`
            : `${classes.textField} ${classes.textFieldValid}`
        }
      />
      <div className={classes.error}>
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
};

export default InputTextField;
