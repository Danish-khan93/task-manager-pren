import * as yup from "yup";

export const signUpFormValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};
export const loginFormValues = {
  email: "",
  password: "",
};

export const singupSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(10, "Password must be at least 10 characters")
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    ),
});
