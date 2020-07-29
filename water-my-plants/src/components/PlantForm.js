import React, { useState } from "react";
import { connect } from "react-redux";
import { addPlant, editPlant } from "../actions/actions";
import { FormContainer, FormGroup, Footer } from "./Global.style";
import { PlantFormWrapper } from './PlantForm.style';

const initialFormState = {
  name: "",
  species: "",
  h2oFrequency: "",
  image: "",
};

const PlantForm = (props) => {

  const [formState, setFormState] = useState(
    props.isEditing ? props.plant : initialFormState
  );

  const [formError, setFormError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.name !== "" && formState.species !== "" && formState.h2oFrequency !== "") {
      setFormError(false);
      if (props.isEditing) {
        props.editPlant(formState);
        props.toggleIsEditing();
      } else {
        props.addPlant(formState);
      }
  
      setFormState(initialFormState);
    }
    else {
      setFormError(true);
    }


  };

  const handleChanges = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return (
  
    <FormContainer>
      <FormGroup>
        <PlantFormWrapper onSubmit={handleSubmit}>
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
          <Footer>
            {formError && <p>Please enter values for all fields.</p>}
            <button className="btn" type="submit">
              Submit
            </button>
          </Footer>
        </PlantFormWrapper>
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
