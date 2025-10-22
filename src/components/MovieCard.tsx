import "../css/MovieCard.css";
import { type Movie } from "../components/Movie";
import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }: { movie: Movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  // function onMovieClick( e : React.MouseEvent<HTMLDivElement>) {
  //   e.preventDefault();
  // }

  return (
    <div className={`movie-card ${favorite ? "favorited" : ""}`}>
      <div className="movie-poster">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/404.jpg"
          }
          alt={movie.title}
        />

        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>

        {movie.vote_average !== undefined && movie.vote_average !== null && (
          <div className="movie-rating-badge">
            <span className="rating-star">⭐</span>
            <span className="rating-value">
              {movie.vote_average.toFixed(1)} / 10
            </span>
          </div>
        )}
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div className="movie-meta">
          <p className="movie-year">{movie.release_date?.split("-")[0]}</p>
          {/* <button className="details-button" onClick={onMovieClick}>
            Overview
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
