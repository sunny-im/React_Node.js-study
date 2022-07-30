let initialState ={
    count:0,
    id:"",
    password:"",
    count2:0,
}

// store을 바꾸는 역할, return 필수...
function reducer(state=initialState,action) {
    console.log('action??? dispatch에서 보낸 그것!!!',action)
    if(action.type==="INCREMENT"){
        return {...state, count:state.count+action.payload.num}
    } else if(action.type==="LOGIN") {
        return {
            ...state, 
            id:action.payload.id,
            password:action.payload.password,
        }
    } else if(action.type==="DECREMENT") {
        return {
            ...state, 
            count2:state.count-action.payload.num,
        }
    } 
    return {...state};
}
export default reducer