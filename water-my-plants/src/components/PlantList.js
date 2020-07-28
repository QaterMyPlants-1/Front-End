import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPlants } from "../actions/actions";

import Plant from "./Plant";

const PlantList = (props) => {
  useEffect(() => {
    props.fetchPlants();
  }, []);

  return (
    <div className="plant-list-wrapper">
      {props.plants.length > 0 &&
        props.plants.map((item) => {
            console.log(item.id) // item.id of edited item is undef here
          return (
            <Plant
              key={item.id}
              id={item.id}
              nickname={item.nickname}
              species={item.species}
              h2oFrequency={item.h2oFrequency}
              image={item.image}
            />
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchPlants })(PlantList);
