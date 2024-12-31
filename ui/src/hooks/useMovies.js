import { useEffect, useState } from "react";
import { moviesServices } from '../services/movie.js'

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMovies();
    }, [])

    const fetchMovies = async () => {
        try {
            const data = await moviesServices.getAllMovies();
            setMovies(data);
        } catch (err) {
            setError(err.data.error)
        }
    }

    return {
        error,
        movies,
        fetchMovies,
    }
}