import { Form, Formik } from "formik";
import React from "react";
import WrapperInput from "../../components/wrapperInput/WrapperInput";
import { LoginValidation } from "../../validations/Validations";
import { useMutation } from "@tanstack/react-query";
import { AxiosConfig } from "../../axios/AxiosConfig";

export default function Login() {
  const loginMutation = useMutation({
    mutationFn: (data) => AxiosConfig.post("/login", data),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    try {
      const response = await AxiosConfig.get(`/login`);

      const user = response.data.find(
        (user) => user.email === values.email && user.password === values.password
      );

      if (user) {
        console.log("Logged in successfully:", user);
      } else {
        alert("Email or password incorrect");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="login_page px">
      <h6>Register</h6>
      <Formik
        validationSchema={LoginValidation}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <WrapperInput name={"email"} label={"Email"} />
          <WrapperInput name={"password"} label={"Password"} isPassword />
          <button className="button" type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
