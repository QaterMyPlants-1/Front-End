import React, { useState } from "react";

import PlantForm from "./PlantForm";
import { connect } from "react-redux";
import { deletePlant } from "../actions/actions";
import {PlantWrapper, Button} from './PlantForm.style'

const Plant = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const onEditClick = () => {
    toggleIsEditing();
  };

  const onDeleteClick = () => {
    props.deletePlant(props.id);
  };

  return (
    <PlantWrapper>
      {!isEditing && (
        <div className="plant-display">
          <p>{props.name}</p>
          <p>{props.species}</p>
          <p>{props.h2oFrequency}</p>
          {props.image && <img src={props.image} alt={props.species} />}
          <Button onClick={onEditClick}>
            Edit Plant
          </Button>
          <Button onClick={onDeleteClick}>
            Delete Plant
          </Button>
        </div>
      )}
      {isEditing && (
        <PlantForm
          toggleIsEditing={toggleIsEditing}
          isEditing={isEditing}
          plant={{
            id: props.id,
            name: props.name,
            species: props.species,
            h2oFrequency: props.h2oFrequency,
            image: props.image,
          }}
        />
      )}
    </PlantWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps, { deletePlant })(Plant);
