import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index"  // rootReducer는 임의로 정한 이름

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;