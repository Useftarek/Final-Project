import { Field } from "formik";
import React from "react";

export default function WrapperInput({ label, name, isPassword }) {
  return (
    <div className="wrapper_input">
      <label htmlFor="{name}">{label}</label>
      {!isPassword && <Field name={name} />}
      {isPassword && <Field name={name} type="password" />}
    </div>
  );
}
