import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import formSchema from "./validation/formSchema";
import { SignupContainer } from "./Signup.styles";
import { FormContainer, FormGroup, Footer } from "./Global.style";
//import axios from "axios";
import { connect } from "react-redux";
import { loginUser } from "../actions/actions";

const initialFormValues = {
  username: "",
  password: "",
};

const intitalFormErrors = {
  username: "",
  password: "",
};

const initialUsers = [];
const initialDisabled = true;

function Login(props) {
  //const [users, setUsers] = useState(initialUsers);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(intitalFormErrors);
  const [formValues, setFormValues] = useState(initialFormValues);

  const { push } = useHistory();

  //// FORM ACTIONS/////////

  const onInputChange = (event) => {
    const { name, value } = event.target;
    inputChange(name, value);
  };
  const inputChange = (name, value) => {
    Yup.reach(formSchema, name)
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

    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };

    props.loginUser(newUser, push);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <SignupContainer onSubmit={onSubmit}>
      <img
        className="image"
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
            <div style={{ color: "red" }}> {formErrors.password} </div>
          )}
        </FormGroup>
      </FormContainer>
      <Footer>
        <button
          type="submit"
          disabled={disabled}
          className={disabled ? "btn btnDisable" : "btn"}
        >
          Login
        </button>
        <p>Don't have an account?</p>
        <Link to="/signup">Register Here </Link>
      </Footer>
    </SignupContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps, { loginUser })(Login);
