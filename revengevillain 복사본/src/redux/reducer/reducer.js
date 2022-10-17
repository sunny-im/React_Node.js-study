let initialState = {
    addBtn: true,
};
const reducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case "ADD_BTN" :
            state.addBtn = payload.addBtn
            break;
        }
        return {...state};
};

export default reducer;