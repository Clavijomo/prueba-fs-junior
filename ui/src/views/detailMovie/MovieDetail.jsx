import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Alert } from "../../components/shared/Alert";
import PosterMovie from '../../resources/images/poster.jpg';
import { IconArrowLeft } from '@tabler/icons-react'
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
                setError(err.data.error);
            }
        }

        fetchMovie();
    }, []);

    return (
        <>
            {movie && movie ? (
                <div
                    style={{
                        backgroundImage: `url(${PosterMovie})`,
                        backgroundPosition: 'center'
                    }}
                    className="h-80 flex flex-col justify-between p-5 rounded-xl relative"
                >
                    <Link
                        className="text-white z-10 flex gap-2"
                        to={'/'}>
                        <IconArrowLeft />
                        Volver
                    </Link>
                    <div className="absolute inset-0 bg-black bg-opacity-55 rounded-2xl"></div>
                    <div>
                    </div>
                    <div className="flex flex-col gap-2 z-10">
                        <h1 className="text-white text-5xl font-semibold">{movie.title}</h1>
                        <p className="text-gray-300 text-lg">{movie.synopsis}</p>
                        <div className="flex items-center gap-2">
                            <p className="text-blue-400">{movie.year}</p>
                            <p className="text-gray-200">{movie.genre}</p>
                        </div>
                        {movie?.cast.length > 0 && (
                            <div className="flex gap-3 flex-wrap mt-3">
                                {movie.cast.map((castMember, i) => (
                                    <p key={i} className="text-slate-500 text-sm bg-slate-200 px-2 py-1 rounded-full">
                                        {castMember}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )
                : (
                    <div className="flex justify-center items-center">
                        <Alert error={error} />
                    </div>
                )}
        </>
    )
}
