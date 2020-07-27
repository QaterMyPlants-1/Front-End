import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import formSchema from "./validation/formSchema";
import axios from "axios";

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

export default function Login() {
  const [users, setUsers] = useState(initialUsers);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(intitalFormErrors);
  const [formValues, setFormValues] = useState(initialFormValues);

  const history = useHistory();
  const loginNewUsers = (newUser) => {
    // axios
    //   .post("", newUser)
    //   .then((res) => {
    //     console.log(res);
    //     setUsers([res.data, ...users]);
    //     setFormValues(initialFormValues);
    //     history.push("/plants");
    //   })
    //   .catch((err) => {});
    history.push("/plants");
  };

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
    loginNewUsers(newUser);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <form className="base-container" onSubmit={onSubmit}>
      <div>
        <img
          className="image"
          src="https://acad.xlri.ac.in/evening/images/login.svg"
          alt="illustrator of a person sitting on a chair"
        ></img>
      </div>
      <div className="form">
        <div className="form-group ">
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
        </div>
        <div className="form-group ">
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
        </div>
      </div>
      <div className="footer">
        <button
          type="submit"
          disabled={disabled}
          className={disabled ? "btn btnDisable" : "btn"}
        >
          Login
        </button>
        <p>Don't have an account?</p>
        <Link to="/signup">Register Here</Link>
      </div>
    </form>
  );
}
