import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../actions/actions";
import "./style.css";

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

const initialUsers = [];
const intialDisable = true;

function Signup(props) {
  return (
    <div className="base-container">
      <div className="image">
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
        <div className="form-group">
          <label htmlFor="number">Phone Number</label>
          <input type="tel" name="number" placeholder="number" />
        </div>
      </div>
      <div className="footer">
        <button onClick={() => registerUser()} type="submit" className="btn">
          Register
        </button>
        <p>Already have an account?</p>
        <Link to="/">Sign in here</Link>
      </div>
    </div>
  );
}

export default connect(null, { registerUser })(Signup);
