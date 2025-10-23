import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import { type Movie } from "../components/Movie";
import { useState } from "react";
import MovieOverview from "../components/Overview";

function Favorite() {
  const { favorites } = useMovieContext();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleMovieInfo = (movie: Movie) => {
    setSelectedMovie(movie);
    console.log(movie.overview);
  };

  const closeMovie = () => {
    setSelectedMovie(null);
  };

  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              movieInfo={handleMovieInfo}
            />
          ))}
        </div>
              {selectedMovie && <MovieOverview movie={selectedMovie} closeMovie={closeMovie} />}
      </div>
      
    );
  } else {
    return (
      <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here.</p>
      </div>
    );
  }
}

export default Favorite;
