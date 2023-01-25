import { combineReducers } from "redux";
import authenciateReducer from "./authenciateReducer";

export default combineReducers({
    auth : authenciateReducer,
})