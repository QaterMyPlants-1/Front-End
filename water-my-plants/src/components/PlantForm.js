import React, { useState } from "react";
import { connect } from "react-redux";
import { addPlant } from "../actions/actions";

const initialFormState = {
  //id: 0, //how to increment? server side?
  nickname: "",
  species: "",
  h2oFrequency: "", //how to implement?
  image: "", //optional
};

const PlantForm = (props) => {
  const [formState, setFormState] = useState(initialFormState);

  const handleSubmit = (event) => {
    event.preventDefault();

    // validation here

    props.addPlant(formState);

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
        <label htmlFor="nickname">Nickname:</label>
        <input
          name="nickname"
          value={formState.nickname}
          onChange={handleChanges}
        />
        <label htmlFor="species">Species:</label>
        <input
          name="species"
          value={formState.species}
          onChange={handleChanges}
        />
        <label htmlFor="h2oFrequency">Water Frequency:</label>
        <input
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

export default connect(mapStateToProps, { addPlant })(PlantForm);
