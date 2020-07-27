import React from "react";
import styled from "styled-components";
import "./style.css";
import { Link, useHistory } from "react-router-dom";

const initialFormValues = {
  username: "",
  password: "",
};

const intitalFormErrors = {
  username: "",
  password: "",
};

const initialUsers = [];
const intialDisable = true;

export default function Login(props) {
  const history = useHistory();
  return (
    <div className="base-container">
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
          <input type="text" name="username" placeholder="username" />
        </div>
        <div className="form-group ">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password" />
        </div>
      </div>
      <div className="footer">
        <button
          type="submit"
          className="btn"
          onClick={() => {
            setTimeout(() => {
              history.push("/plants");
            }, 1000);
          }}
        >
          Login
        </button>
        <p>Don't have an account?</p>
        <Link to="/signup">Register Here</Link>
      </div>
    </div>
  );
}
