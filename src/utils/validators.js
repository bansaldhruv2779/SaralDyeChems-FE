import * as Yup from "yup";

export const signUpValidator = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 3) {
    errors.name = "Invalid Name";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
      values.password,
    )
  ) {
    errors.password =
      "Password must be within 6 to 16 characters and must contain at least 1 number and 1 special character";
  }
  if (!values.phone) {
    errors.phone = "Required";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (
    !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
      values.confirmPassword,
    )
  ) {
    errors.confirmPassword =
      "Password must be within 6 to 16 characters and must contain at least 1 number and 1 special character";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Confirm Password must be same as password";
  }

  return errors;
};

export const loginValidator = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

export const forgotPasswordValidator = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

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
