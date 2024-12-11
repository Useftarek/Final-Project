import { Form, Formik } from "formik";
import React from "react";
import WrapperInput from "../../components/wrapperInput/WrapperInput";
import { LoginValidation } from "../../validations/Validations";
import { useMutation } from "@tanstack/react-query";
import { AxiosConfig } from "../../axios/AxiosConfig";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async (values) => {
      const response = await AxiosConfig.get("/login");
      const user = response.data.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (user) {
        return { success: true };
      } else {
        throw new Error("Email or password incorrect");
      }
    },
    onSuccess: () => {
      toast.success("Login successful");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message || "Server error, please try again later.");
    },
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, { resetForm }) => {
    loginMutation.mutate(values, {
      onError: () => null
    });
  };

  return (
    <div className="login_page px">
      <h6>Login</h6>
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
