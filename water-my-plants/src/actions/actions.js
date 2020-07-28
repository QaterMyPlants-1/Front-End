import { axiosWithAuth } from "../utilities/axiosWithAuth";
import axios from "axios";

// Action Types

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export const FETCH_PLANTS_START = "FETCH_PLANTS_START";
export const FETCH_PLANTS_SUCCESS = "FETCH_PLANTS_SUCCESS";
export const FETCH_PLANTS_FAILURE = "FETCH_PLANTS_FAILURE";
export const ADD_PLANTS_START = "ADD_PLANTS_START";
export const ADD_PLANT_SUCCESS = "ADD_PLANT_SUCCESS";
export const ADD_PLANT_FAILURE = "ADD_PLANT_FAILURE";
export const EDIT_PLANT_START = "EDIT_PLANT_START";
export const EDIT_PLANT_SUCCESS = "EDIT_PLANT_SUCCESS";
export const EDIT_PLANT_FAILURE = "EDIT_PLANT_FAILURE";
export const DELETE_PLANT_START = "DELETE_PLANT_START";
export const DELETE_PLANT_SUCCESS = "DELETE_PLANT_SUCCESS";
export const DELETE_PLANT_FAILURE = "DELETE_PLANT_FAILURE";

// Action Creators

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_START });
    axiosWithAuth()
      .post("/login", user)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data.user });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: LOGIN_USER_FAILURE, payload: error.message });
      });
  };
};

export const updateUser = (user) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_USER_START });
    dispatch({ type: UPDATE_USER_SUCCESS, payload: user });
    // axiosWithAuth()
    //   .put(`https://watermyplants26.herokuapp.com/users/${user.id}`, user)
    //   .then((response) => {
    //     console.log(response);
    //     // dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
    //   });
  };
};

export const fetchPlants = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_PLANTS_START });
    axios
      .get("https://reqres.in/api/unknown")
      .then((response) => {
        dispatch({ type: FETCH_PLANTS_SUCCESS, payload: response.data.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_PLANTS_FAILURE, payload: error.message });
      });
  };
};

export const addPlant = (plant) => {
  return (dispatch) => {
    dispatch({ type: ADD_PLANTS_START });
    axios
      .post("https://reqres.in/api/users", plant)
      .then((response) => {
        dispatch({ type: ADD_PLANT_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ADD_PLANT_FAILURE, payload: error.message });
      });
  };
};

export const editPlant = (plant) => {
  return (dispatch) => {
    dispatch({ type: EDIT_PLANT_START });
    axios
      .put(`https://reqres.in/api/users/${plant.id}`, plant)
      .then((response) => {
        dispatch({
          type: EDIT_PLANT_SUCCESS,
          payload: { ...response.data, id: plant.id },
        });
      })
      .catch((error) => {
        dispatch({ type: EDIT_PLANT_FAILURE, payload: error.message });
      });
  };
};

export const deletePlant = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_PLANT_START });
    axios
      .delete(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        dispatch({ type: DELETE_PLANT_SUCCESS, payload: id });
      })
      .catch((error) => {
        dispatch({ type: DELETE_PLANT_FAILURE, payload: error.message });
      });
  };
};
