const API_KEY = "4aa9f00100652ba1c5555e8dee93daf7";
const BASE_URL = "https://api.themoviedb.org/3";


export const getPopularMovies = async () => {

    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`);
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query: any) => {

    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}`
    );
    const data = await response.json()
    return data.results
};