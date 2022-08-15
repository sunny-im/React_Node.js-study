// reducer를 합치자 !
import { combineReducers } from "redux";
import authenciateReducer from "./authenciateReducer";
import productReducer from "./productReducer";

export default combineReducers({
    auth : authenciateReducer,
    product : productReducer
})