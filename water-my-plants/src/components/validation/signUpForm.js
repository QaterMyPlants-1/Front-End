import * as Yup from "yup";

const signUp = Yup.object({
  username: Yup.string().required("username is required"),
  password: Yup.string()
    .required("password is required")
    .min(3, "Password must be atleast 3 characters.")
    .max(128),
  number: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(9, "A phone number is required")
    .required("A phone number is required"),
});

export default signUp;
