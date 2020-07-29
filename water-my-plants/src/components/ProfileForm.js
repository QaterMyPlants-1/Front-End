import React, { useState } from "react";
import { connect } from "react-redux";
import { updateUser } from "../actions/actions";
import { FormContainer, FormGroup, Footer } from "./Global.style";

function ProfileForm(props) {

  const [formState, setFormState] = useState({...props.user, password: ""});
  const [formError, setFormError] = useState(false);

  const handleChanges = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formState.number !== "" && formState.password !== "") {
      setFormError(false);
      props.updateUser(formState);
      props.toggleIsEditing();
    }
    else {
      setFormError(true);
    }
  };

  return (
    <FormContainer>
      <FormGroup>
        <form onSubmit={handleSubmit}>
          <label htmlFor="number">Phone Number:</label>
          <input
            id="number"
            name="number"
            value={formState.number}
            onChange={handleChanges}
          />
          <label htmlFor="newPassword">New Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChanges}
          />
          {formError && <p>Please enter values for all fields.</p>}
        <Footer>
          <button type="submit">Save Changes</button>
        </Footer>
        </form>
      </FormGroup>
    </FormContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
    user: state.user,
  };
};

export default connect(mapStateToProps, { updateUser })(ProfileForm);
