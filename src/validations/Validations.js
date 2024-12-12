import * as Yup from "yup";

export const LoginValidation = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email with '@'")
    .required("Email is required"),
  password: Yup.string()
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(
      /[#@]/,
      "Password must contain at least one special character (# or @)"
    )
    .matches(/\d/, "Password must contain at least one number")
    .required("Password is required"),
});
