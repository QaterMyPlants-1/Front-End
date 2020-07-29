import React, { useState } from "react";
import { connect } from "react-redux";
import { updateUser } from "../actions/actions";
import { FormContainer, FormGroup, Footer } from "./Global.style";

function ProfileForm(props) {
  const [formState, setFormState] = useState({
    ...props.user,
    /* currentPassword: "",*/ password: "",
  });

  const handleChanges = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateUser(formState); // come back to this when state/render is correct
    props.toggleIsEditing();
  };

  return (
    <FormContainer>
      <FormGroup onSubmit={handleSubmit}>
        <label htmlFor="number">Phone Number:</label>
        <input
          id="number"
          name="number"
          value={formState.number}
          onChange={handleChanges}
        />
        {/*<label htmlFor="currentPassword">Current Password:</label>
        <input
          id="currentPassword"
          type="password"
          name="currentPassword"
          value={formState.currentPassword}
          onChange={handleChanges}
  />*/}
        <label htmlFor="newPassword">New Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChanges}
        />
        <Footer>
          <button type="submit">Save Changes</button>
        </Footer>
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
