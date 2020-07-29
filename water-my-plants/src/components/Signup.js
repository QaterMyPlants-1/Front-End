import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import signUp from "./validation/signUpForm";
import axios from "axios";
import { SignupContainer } from "./Signup.styles";
import { FormContainer, FormGroup, Footer } from "./Global.style";

const initialFormValues = {
  username: "",
  password: "",
  number: "",
};

const intitalFormErrors = {
  username: "",
  password: "",
  number: "",
};

const initialSignUp = [];
const initialDisabled = true;

export default function Signup() {
  const [register, setRegister] = useState(initialSignUp);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(intitalFormErrors);
  const [formValues, setFormValues] = useState(initialFormValues);

  const signUpForm = (newForm) => {
    console.log({ newForm });
    axios
      .post("https://watermyplants26.herokuapp.com/api/auth/register", newForm)
      .then((res) => {
        console.log(res);
        setRegister([res.data, ...register]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //// FORM ACTIONS/////////

  const onInputChange = (event) => {
    const { name, value } = event.target;
    inputChange(name, value);
  };
  const inputChange = (name, value) => {
    Yup.reach(signUp, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const newForm = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      number: formValues.number.trim(),
    };
    signUpForm(newForm);
  };

  useEffect(() => {
    signUp.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
  return (
    <SignupContainer onSubmit={onSubmit}>
      <img
        src="https://acad.xlri.ac.in/evening/images/login.svg"
        alt="illustrator of a person sitting on a chair"
      ></img>
      <FormContainer>
        <FormGroup>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formValues.username}
            onChange={onInputChange}
          />
          {!!formErrors.username && (
            <div style={{ color: "red", marginBottom: 15 }}>
              {formErrors.username}
            </div>
          )}
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formValues.password}
            onChange={onInputChange}
          />
          {!!formErrors.password && (
            <div style={{ color: "red", marginBottom: 15 }}>
              {formErrors.password}
            </div>
          )}
        </FormGroup>
        <FormGroup>
          <label htmlFor="number">Phone Number</label>

          <input
            type="tel"
            name="number"
            value={formValues.number}
            onChange={onInputChange}
          />
          {!!formErrors.number && (
            <div style={{ color: "red", marginBottom: 15 }}>
              {formErrors.number}
            </div>
          )}
        </FormGroup>
      </FormContainer>
      <Footer>
        <button
          type="submit"
          disabled={disabled}
          className={disabled ? "btn btnDisable" : "btn"}
        >
          Register
        </button>
        <p>Already have an account?</p>
        <Link to="/">Sign in here </Link>
      </Footer>
    </SignupContainer>
  );
}
