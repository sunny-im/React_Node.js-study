/* 리덕스의 구조 */

const redux = require('redux');
const createStore = redux.createStore;
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
const combineReducers = redux.combineReducers;  // 두개 이상의 리듀서를 합친다

// actions (object를 반환한다)
// action-types
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER'
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT'
const addSubscriber = () => {
  return {
    type : ADD_SUBSCRIBER
  }
}
const addViewCount = () => {
  return {
    type : ADD_VIEWCOUNT
  }
}

// reducers (action을 핸들링)
// 2개의 인자 >>  state : 초기값 필요 , action : 위에 action값
const subscriberState = {
  subscribers : 367
}
// state=subscriberState 는 state에 값이 들어오지 않으면 초기값으로 사용한다는 의미
const subscriberReducer = (state=subscriberState,action) => {
  switch(action.type){
    case ADD_SUBSCRIBER:
      return {
        ...state,  // 기존 state copy
        subscribers: state.subscribers + 1
      }
    default: return state;  // 아무 액션도 없을 떄는 그냥 state를 반환
  }
} 

const viewState = {
  viewCount : 100
}
const viewReducer = (state=viewState, action) => {
  switch(action.type){
    case ADD_VIEWCOUNT :
      return {
        ...state,
        viewCount: state.viewCount + 1
      }
    default: return state;
  }
}

// 여러 리듀서를 합친다
const rootReducer = combineReducers({
  view : viewReducer, 
  subscriber : subscriberReducer
})

// store  //applyMiddleware(logger) 로그 확인가능
const store = createStore(rootReducer, applyMiddleware(logger)); 

// subscribe - view - dispatch


// console.log(store.getState());  // {subscribers:367} 이 출력된다.

// store.dispatch(addSubscriber());
// console.log(store.getState()); // {subscribers:368} 이 출력된다.


// store.subscribe(()=>{
//   console.log('subscribe ==>' , store.getState());
// })

store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addViewCount());
store.dispatch(addViewCount());
store.dispatch(addViewCount());