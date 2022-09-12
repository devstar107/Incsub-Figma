import { combineReducers } from "redux";
import planReducers from "./planReducer";

const rootReducer = combineReducers({
  planReducers,
});

export default rootReducer;
