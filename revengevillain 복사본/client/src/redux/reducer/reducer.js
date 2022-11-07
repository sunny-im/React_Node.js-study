let initialState = {
    steamUserList: [],
};
const reducer = (state=initialState, action) => {
	const {type, payload} = action;
	switch(type){
		case "ADD_STEAM_USER" :
			state.steamUserList.push({
				nickname : payload.newNickName,
				type : payload.newType,
				date : payload.newDate,
				parameter : payload.newParameter,
				img : payload.newImg,
			});
			break;
		}
		return {...state};
};

export default reducer;