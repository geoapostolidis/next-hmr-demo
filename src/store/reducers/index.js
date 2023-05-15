import { combineReducers } from "redux";
import mainReducer from "./mainReducer";

// Combine multiple reducers if needed
const rootReducer = combineReducers({
  main: mainReducer,
  // Add more reducers here if required
});

export default rootReducer;