import React,{useEffect} from 'react'
import { movieAction } from '../redux/action/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';

const Home = () => {
    const dispatch = useDispatch();
    const {popularMovies,topRatedMovies,upcomingMovies} = useSelector(state=>state.movie);
    //console.log("home",popularMovies );

    useEffect(()=>{
        dispatch(movieAction.getMovies());
    },[]);

    return (
        <div>
            {popularMovies.results &&
            <Banner movie={popularMovies.results[0]}/>
            }
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