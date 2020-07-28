import React, { useState } from "react";

import ProfileForm from "./ProfileForm";
import { connect } from "react-redux";

function Profile(props) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const onEditClick = () => {
    toggleIsEditing();
  };

  return (
    <div className="profile-wrapper">
      {!isEditing && (
        <div className="profile-display">
          <h3>{props.user.username}</h3>
          <p>{props.user.number}</p>
          <button className="edit-profile-button" onClick={onEditClick}>
            Edit Profile
          </button>
        </div>
      )}
      {isEditing && (
        <ProfileForm
          toggleIsEditing={toggleIsEditing}
          isEditing={isEditing}
          user={{ number: props.user.number, password: props.user.password }}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {})(Profile);
