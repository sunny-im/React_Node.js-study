let initialState = {
    keyword: "",
};
const reducer = (state=initialState, action) => {
    const {type, payload} = action;
    // contactForm에서 받은 값으로 행동지침을 정하자
    switch(type){
        case "SEARCH_ITEM" :
            state.keyword = payload.keyword
            break;
        }
        return {...state}; // store는 리턴값을 무조건 받아야하니까 여기도 return !
};

export default reducer;