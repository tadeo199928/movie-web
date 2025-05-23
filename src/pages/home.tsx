import MovieCard from "../components/MovieCard";
// import RecentSearch from "../components/ListRecentMovie"
import { useState, useEffect } from "react";
import "../css/Home.css"
import {searchMovies, getPopularMovies} from "../services/api"

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    // const [recentSearches, setRecentSearches] = useState<List[]>([]);

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMOvies = async () =>{
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {}
            finally {
                setLoading(false)
            }
        }
    }, []);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       // alert(searchQuery);
        // setRecentSearches([...recentSearches, { recentSearch: searchQuery }])
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                placeholder="Search for movies"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
            <button
                type="submit"
                className="serach-button">
                Search
            </button>
        </form>

         <div className="movie-grid">
            {movies.map((movie) => (
                
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div> 

        {/* <div className="search-grid">
            {recentSearches.map((item, index) => (
                <RecentSearch key={index} list={item} />
            ))} 

        </div>  */}


    </div>
}

export default Home