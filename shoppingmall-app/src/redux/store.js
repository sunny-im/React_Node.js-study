import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index"  // rootReducer는 임의로 정한 이름
// chrome redux devtool 사용 
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;