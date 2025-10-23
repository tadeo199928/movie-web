import MovieCard from "../components/MovieCard";
// import RecentSearch from "../components/ListRecentMovie"
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";
import { type Movie } from "../components/Movie";
import MovieOverview from "../components/Overview";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
        setError(null);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log(err.message);
          setError("Failed to load movies: " + err.message);
        } else {
          console.log(err);
          setError("Failed to load movies...");
        }
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, [searchQuery]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchReseults = await searchMovies(searchQuery);
      setMovies(searchReseults);
      setError(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
        setError("Failed to search movies: " + err.message);
      } else {
        console.log(err);
        setError("Failed to load movies...");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleMovieInfo = (movie: Movie) => {
    setSelectedMovie(movie);
    console.log(movie.overview);
  };

  const closeMovie = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="serach-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              movieInfo={handleMovieInfo}
            />
          ))}
        </div>
      )}

      {selectedMovie && <MovieOverview movie={selectedMovie} closeMovie={closeMovie} />}

    </div>
  );
}

export default Home;
