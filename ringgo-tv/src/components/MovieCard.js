import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

const MovieCard = ({item}) => {
    const genreList = useSelector(state=>state.movie.genreList);
  return (
    <div 
        className="card" 
        style={{
            backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${item.poster_path}` + 
            ")",
        }}
    >
        <div className="overlay">
            <div class="head">
                <h3>{item.title}</h3>
                <div>{item.genre_ids.map(id =>
                    <Badge bg="danger">{genreList.find(item=>item.id==id).name}</Badge>
                    )}
                </div>
                <div>
                    <span>평점 {item.vote_average}점 / </span>
                    <span>{item.adult?"청불":"전체관람가"}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard;