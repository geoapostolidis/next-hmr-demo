import { RESET_DATA } from "../constants";

const initialState = {
  data: []
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_DATA:
      return { ...state, data: initialState.data };
    default:
      return state;
  }
};

export default mainReducer