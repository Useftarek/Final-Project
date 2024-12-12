import { Form, Formik } from "formik";
import React from "react";
import WrapperInput from "../../components/wrapperInput/WrapperInput";
import { useMutation } from "@tanstack/react-query";
import { AxiosConfig } from "../../axios/AxiosConfig";
import { useNavigate } from "react-router-dom";
import { LoginValidation } from "../../validations/Validations";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: async (values) => {
      const response = await AxiosConfig.post("/users", values);
      return response.data;
    },
    onSuccess: () => {
      navigate("/login");
      toast.success("Register Successfully");
    },
  });

  const onSubmit = (values) => {
    registerMutation.mutate(values);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="login_page px">
      <h6>Register</h6>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginValidation}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <WrapperInput
              name={"email"}
              label={"Email"}
              error={touched.email && errors.email ? errors.email : null}
            />

            <WrapperInput
              name={"password"}
              label={"Password"}
              isPassword
              error={touched.password && errors.password ? errors.password : null}
            />

            <button
              className="button"
              type="submit"
              disabled={registerMutation.isLoading}
            >
              {registerMutation.isLoading ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
