// 미들웨어 함수만들기!
function getProducts(searchQuery) {
    // 미들웨어는 함수를 리턴한다! dispatch, getState 파라미터를 갖는다.
    return async(dispatch, getState)=>{
        let url=`http://localhost:4000/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        // 받은 data를 리듀서로 보내기
        dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}});
    };
}

export const productAction={getProducts};