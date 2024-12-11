import * as Yup from "yup"

export const  LoginValidation = Yup.object({
  email: Yup.string().email().required("Required"),
  password : Yup.string().min(8).required("Required"),
})