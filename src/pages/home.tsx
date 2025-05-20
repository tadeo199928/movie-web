import MovieCard from "../components/MovieCard"

function Home() {

    const movies = [
        { id: 1, title: "John Wick", release_date: "2020", url: "x" },
        { id: 2, title: "Terminator", release_date: "1999", url: "x" },
        { id: 3, title: "The Matix", release_date: "1998", url: "x" },

    ]

    return <div className="home">

        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
}

export default Home