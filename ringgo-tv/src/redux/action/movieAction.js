import api from "../api";

// .env파일에 숨겨둔 key값 가져오기
const API_KEY=process.env.REACT_APP_API_KEY;
function getMovies(){
    return async (dispatch)=>{
        try {
        // 데이터 도착 전 로딩스피너 true
        dispatch({type:"GET_MOVIES_REQUEST"})

        //fetch대신 axios로 !
        const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const topRatedApi = api.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
        const upcomingApit = api.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
        const genresApi = api.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);

        // 연관이 없는 API 여러개를 await로 하나하나 부르면 기다리는 시간이 있기때문에 동시에 부르는 방법! Promise.all()
        let [popularMovies, topRatedMovies, upcomingMovies, genreList] = await Promise.all([
            popularMovieApi,
            topRatedApi,
            upcomingApit,
            genresApi
        ]);
        console.log("장르",genreList)
        // 데이터 도착 후 로딩스피너 false
        dispatch({
            type : "GET_MOVIES_SUCCESS",
            payload : {
                popularMovies:popularMovies.data , 
                topRatedMovies:topRatedMovies.data, 
                upcomingMovies:upcomingMovies.data,
                genreList:genreList.data.genres,
            }
        });
        // console.log("popularMovies",popularMovies);
        // console.log("topRatedMovies",topRatedMovies);
        // console.log("upcomingMovies",upcomingMovies);
        } catch(error){
            //에러 핸들링하기
            dispatch({type:"GET_MOVIES_FAILURE"})
        }
    };
}
export const movieAction = {
    getMovies,
}