import React from "react";
import { Formik, Form } from "formik";
import { useMutation } from "@tanstack/react-query";
import { AxiosConfig } from "../../axios/AxiosConfig";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import WrapperInput from "../../components/wrapperInput/WrapperInput";
import { LoginValidation } from "../../validations/Validations";

export default function Login() {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async (values) => {
      const response = await AxiosConfig.get("/users");
      const user = response.data.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (user) {
        return { user };
      } else {
        throw new Error("Email or password incorrect");
      }
    },
    onSuccess: () => {
      toast.success("Login Successfully");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message || "Error Please Try Again");
    },
  });

  const onSubmit = (values) => {
    loginMutation.mutate(values);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="login_page px">
      <h6>LOGIN</h6>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <WrapperInput name={"email"} label={"Email"} />
          <WrapperInput name={"password"} label={"Password"} isPassword />
          <button
            className="button"
            type="submit"
            disabled={loginMutation.isLoading}
          >
            {loginMutation.isLoading ? "Login..." : "Login"}
          </button>
          <p>
            Don't have an account? <NavLink to={"/regitser"}>Sign Up</NavLink>
          </p>
        </Form>
      </Formik>
    </div>
  );
}
