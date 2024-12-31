import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { moviesServices } from "../../services/movie";

export const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const data = await moviesServices.getMovieById(id);
                setMovie(data);
            } catch (err) {
                setError(err);
            }
        }

        fetchMovie();
    }, [])

    return (
        <div>
            {movie &&
                <div>
                    <h1>{movie.title}</h1>
                </div>
            }
        </div>
    )
}
