import * as Yup from "yup"

export const signUpValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(8).required("write correct password"), 
  password2: Yup.string().min(8).required("write correct password")
})
export const loginValidationSchema = Yup.object({
  loginemail: Yup.string().email("Invalid email").required("Email is required"),
  loginpassword: Yup.string().min(8).required("write correct password"), 
})