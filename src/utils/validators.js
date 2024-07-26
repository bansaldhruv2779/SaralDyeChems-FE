import * as Yup from "yup";

export const contactUsValidator = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  lastName: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  email: Yup.string().required("Required").email("Invalid email"),
  phone: Yup.string()
    .required("Required")
    .matches(
      "^(?:(?:+|0{0,2})91(s*[-]s*)?|[0]?)?[6789]d{9}$",
      "Please enter a valid number!",
    ),
  message: Yup.string().required("Required").min(10, "Too Short!"),
});
