import React, { useState } from "react";
import { connect } from "react-redux";
import { addPlant, editPlant } from "../actions/actions";

const initialFormState = {
  //id: 0, //how to increment? server side?
  name: "",
  species: "",
  h2oFrequency: "", //how to implement?
  image: "", //optional
};

const PlantForm = (props) => {
  const [formState, setFormState] = useState(
    props.isEditing ? props.plant : initialFormState
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    // validation here

    if (props.isEditing) {
      props.editPlant(formState);
      props.toggleIsEditing();
    } else {
      props.addPlant(formState);
    }

    setFormState(initialFormState); // reset form state if successful
  };

  const handleChanges = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="plant-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChanges}
        />
        <label htmlFor="species">Species:</label>
        <input
          id="species"
          name="species"
          value={formState.species}
          onChange={handleChanges}
        />
        <label htmlFor="h2oFrequency">Water Frequency:</label>
        <input
          id="h2oFrequency"
          name="h2oFrequency"
          value={formState.h2oFrequency}
          onChange={handleChanges}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps, { addPlant, editPlant })(PlantForm);
