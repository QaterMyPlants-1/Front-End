import React, { useState } from "react";
import { connect } from "react-redux";
import { updateUser } from "../actions/actions";

function ProfileForm(props) {
  const [formState, setFormState] = useState(props.isEditing ? props.user : {});

  const handleChanges = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateUser(formState);
    props.toggleIsEditing();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Phone Number:</label>
        <input
          id="number"
          name="number"
          value={formState.number}
          onChange={handleChanges}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChanges}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps, { updateUser })(ProfileForm);
