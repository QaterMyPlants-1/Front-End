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
          return (
            <Plant
              key={item.id}
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
