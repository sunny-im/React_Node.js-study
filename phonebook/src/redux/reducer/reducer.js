let initialState = {
    contactList: [],
    keyword: "",
};
const reducer = (state=initialState, action) => {
    const {type, payload} = action;
    // contactForm에서 받은 값으로 행동지침을 정하자
    switch(type){
        case "ADD_CONTACT" :
            // // return된 값으로 store에서 적용
            // return {
            //     ...state, // state가 여러개 있을 수도 있으니 그대로 유지를 하고 (defalut라고 생각하길)
            //     contactList: [  // contactList만 변경하는 것, sotre는 새로운 주소의 객체만 받아들인다!
            //         ...state.contactList,
            //         {
            //             name:payload.name,
            //             phoneNumber:payload.phoneNumber,
            //         },
            //     ],
            // };
            state.contactList.push({
                name: payload.name,
                phoneNumber: payload.phoneNumber,
            });
            break;
        case "SEARCH_NAME" :
            state.keyword = payload.keyword
            break;
        }
        return {...state}; // store는 리턴값을 무조건 받아야하니까 여기도 return !
};

export default reducer;