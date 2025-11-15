import type { JSX } from "react";
import type { MovieId } from "./types/Movie";
import { useDispatch, useSelector } from "react-redux";
import selectMovie from "./selectors";
import style from "./Movie.module.css"

export default function MoviesList(): JSX.Element {
  const movies = useSelector(selectMovie);
  const dispatch = useDispatch();
  const handleDelete = (id: MovieId): void => {
    dispatch({ type: "movies/delete", payload: id });
  };
  return (
    <div className="flex mx-auto p-4 md:shrink ">
   
      <ul>
        {movies.map((movie) => (
          
          <li><div className="flex"  ><div className="max-w-full w=1/2">
            <img className="object-contain max-w-full max-h-full"  src={movie.image} alt={movie.title} /></div>

            <h2>{movie.title} </h2>
            <h3>{movie.country} </h3>
            <h4>{movie.genre} </h4>
            <h4>{movie.releaseDate} </h4>
            <button type="button" onClick={() => handleDelete(movie.id)}>
              Удалить фильм
            </button>
          </div></li>
        ))}
      </ul>
    
    </div>
  );
}
