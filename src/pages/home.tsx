import MovieCard from "../components/MovieCard";
// import RecentSearch from "../components/ListRecentMovie"
import { useState } from "react";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    // const [recentSearches, setRecentSearches] = useState<List[]>([]);


    const movies = [
        { id: 1, title: "John Wick", release_date: "2020", url: "x" },
        { id: 2, title: "Terminator", release_date: "1999", url: "x" },
        { id: 3, title: "The Matix", release_date: "1998", url: "x" },

    ]

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