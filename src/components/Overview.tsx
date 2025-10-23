import "../css/MovieOvervier.css";
import { type Movie } from "../components/Movie";
import { useMovieContext } from "../context/MovieContext";

function MovieOverview({
  movie,
  closeMovie,
}: {
  movie: Movie;
  closeMovie: () => void;
}) {

      const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
      const favorite = isFavorite(movie.id);
    
      function onFavoriteClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (favorite) removeFromFavorites(movie.id);
        else addToFavorites(movie);
      }
      
  return (
    <div className="movie-overview-modal">
      <div className="movie-overview-content-box">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/404.jpg"
          }
          alt={movie.title}
        />
        <div className="movie-details">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <button onClick={closeMovie}>Close</button>
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>♥</button>
        </div>
      </div>
    </div>
  );
}

export default MovieOverview;
