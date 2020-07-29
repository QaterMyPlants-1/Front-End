import React, { useState } from "react";

import ProfileForm from "./ProfileForm";
import { connect } from "react-redux";
import{ ProfileWrapper, ProfileDisplay} from './Profile.style'

function Profile(props) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const onEditClick = () => {
    toggleIsEditing();
  };

  return (
    <ProfileWrapper>
      {!isEditing && (
        <ProfileDisplay>
          <h3>{props.user.username}</h3>
          <p>{props.user.number}</p>
          <button className="edit-profile-button" onClick={onEditClick}>
            Edit Profile
          </button>
        </ProfileDisplay>
      )}
      {isEditing && (
        <ProfileForm
          toggleIsEditing={toggleIsEditing}
          isEditing={isEditing}
          user={{ number: props.user.number, password: props.user.password }}
        />
      )}
    </ProfileWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {})(Profile);
