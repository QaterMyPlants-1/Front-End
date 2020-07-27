import * as actions from "../actions/actions";

const initialState = {
  isLoading: false,
  error: "",
  plants: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_PLANTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case actions.FETCH_PLANTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        plants: action.payload,
        error: "",
      };
    case actions.FETCH_PLANTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actions.ADD_PLANTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case actions.ADD_PLANT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        plants: [...state.plants, action.payload],
        error: "",
      };
    case actions.ADD_PLANT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
