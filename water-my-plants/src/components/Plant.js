import React, { useState } from "react";

import PlantForm from "./PlantForm";
import { connect } from "react-redux";
import { deletePlant } from "../actions/actions";

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
    <div className="plant-wrapper">
      {!isEditing && (
        <div className="plant-display">
          <p>{props.nickname}</p>
          <p>{props.species}</p>
          <p>{props.h2oFrequency}</p>
          {props.image && <img src={props.image} alt={props.species} />}
          <button className="edit-plant-button" onClick={onEditClick}>
            Edit Plant
          </button>
          <button className="delete-plant-button" onClick={onDeleteClick}>
            Delete Plant
          </button>
        </div>
      )}
      {isEditing && (
        <PlantForm
          toggleIsEditing={toggleIsEditing}
          isEditing={isEditing}
          plant={{
            id: props.id,
            nickname: props.nickname,
            species: props.species,
            h2oFrequency: props.h2oFrequency,
            image: props.image,
          }}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps, { deletePlant })(Plant);
