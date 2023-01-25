let initialState = {
	id:'',
	password:'',
	authenticate:false
}

function authenciateReducer(state=initialState, action) {
	let {type, payload} = action;
	switch(type) {
			case "LOGIN_SUCCESS" :
					console.log("login success reducer 도착!")
					return {...state,id:payload.id,password:payload.password, authenticate:true}
			default:
					return {...state}
	}
}

export default authenciateReducer;