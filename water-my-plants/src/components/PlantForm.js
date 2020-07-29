import React, { useState } from "react";
import { connect } from "react-redux";
import { addPlant, editPlant } from "../actions/actions";
import { FormContainer, FormGroup, Footer } from "./Global.style";
const initialFormState = {
  //id: 0, //how to increment? server side?
  nickname: "",
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
    <FormContainer>
      <FormGroup onSubmit={handleSubmit}>
        <label htmlFor="nickname">Nickname:</label>
        <input
          id="nickname"
          name="nickname"
          value={formState.nickname}
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
          id="h20Frequency"
          name="h2oFrequency"
          value={formState.h2oFrequency}
          onChange={handleChanges}
        />
        <Footer>
          <button className="btn" type="submit">
            Submit
          </button>
        </Footer>
      </FormGroup>
    </FormContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps, { addPlant, editPlant })(PlantForm);
