import React from "react";

import PlantForm from "./PlantForm";
import PlantList from "./PlantList";

import {PlantTitle} from './Plants.style';

const Plants = () => {
  return (
    <div className="plants-wrapper">
      <PlantTitle>Add a new plant!</PlantTitle>
      <PlantForm />
      <PlantList />
    </div>
  );
};

export default Plants;
