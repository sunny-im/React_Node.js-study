import React,{useEffect} from 'react'
import { movieAction } from '../redux/action/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
    const dispatch = useDispatch();
    const {popularMovies,topRatedMovies,upcomingMovies, loading} = useSelector(state=>state.movie);
    //console.log("home",popularMovies );

    useEffect(()=>{
        dispatch(movieAction.getMovies());
    },[]);

    // loading이 true면 로딩스피너를 보여주고, false면 데이터를 보여준다.
    // true : 데이터 도착 전 !!  false : 데이터 도착 후 또는 에러발생 시!!
    if(loading){
        return <ClipLoader color="gold" loading={loading} size={150} />;
    }
    return (
        <div>
            {/* {popularMovies.results && */}
            <Banner movie={popularMovies.results[0]}/>
            {/* } */}
            <h1>인기영화</h1>
            <MovieSlide movies={popularMovies}/>
            <h1>평점 높은 영화</h1>
            <MovieSlide movies={topRatedMovies}/>
            <h1>개봉 예정 영화</h1>
            <MovieSlide movies={upcomingMovies}/>
        </div>
    )
};

export default Home;