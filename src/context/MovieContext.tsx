import { createContext, useState, useContext, useEffect } from "react";
import type { ReactNode } from "react";

import { type Movie } from "../components/Movie"



interface MovieContextType {
    favorites: Movie[];
  setFavorites: React.Dispatch<React.SetStateAction<Movie[]>>;
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
}


const MovieContext = createContext<MovieContextType | undefined>(undefined);


export const useMovieContext = () => {
    const context = useContext(MovieContext);
    if (!context) {
        throw new Error("useMovieContext must be used within a MovieProvider");
    }
    return context;
};


interface MovieProviderProps {
    children: ReactNode;
}


export const MovieProvider = ({ children }: MovieProviderProps) => {
    const [favorites, setFavorites] = useState<Movie[]>([]);
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");
        if (storedFavs) {
            setFavorites(JSON.parse(storedFavs));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie: Movie) => {
        setFavorites(prev =>[...prev, movie])
    }

    const removeFromFavorites = (movieId: number) => {
        setFavorites(prev => prev.filter(movie  => movie.id !== movieId))
    }

    const isFavorite = (movieId: number) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        setFavorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};
