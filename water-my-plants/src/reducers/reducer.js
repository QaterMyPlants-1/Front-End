import * as actions from "../actions/actions";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: "",
  plants: [],
  user: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case actions.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        user: action.payload,
        error: "",
      };
    case actions.LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        error: action.payload,
      };
    case actions.LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actions.FETCH_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case actions.FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: "",
      };
    case actions.FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actions.UPDATE_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case actions.UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: {
          ...state.user,
          number: action.payload.number,
          password: action.payload.password,
        },
        error: "",
      };
    case actions.UPDATE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
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
    case actions.EDIT_PLANT_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case actions.EDIT_PLANT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        plants: state.plants.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        }),
      };
    case actions.EDIT_PLANT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actions.DELETE_PLANT_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case actions.DELETE_PLANT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        plants: state.plants.filter((item) => {
          if (item.id !== action.payload) {
            return item;
          }
        }),
      };
    case actions.DELETE_PLANT_FAILURE:
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
