import { useEffect } from 'react';
import { useMovies } from '../../hooks/useMovies'
import { CardMovie } from './_CardMovie';
import { Link } from 'react-router-dom'

export const HomeMovies = () => {
    const { error, movies } = useMovies();

    return (
        <div>
            <h1 className="text-white text-4xl">Listado de películas</h1>
            <div className='mt-10 grid grid-cols-3 gap-4 items-center'>
                {movies && movies.length > 0 ? (
                    movies.map((movie) => (
                        <Link
                            to={`movies/${movie.id}`}
                            key={movie.id}
                        >
                            <CardMovie movie={movie} />
                        </Link>
                    ))
                ) : (
                    <div className='h-52 flex items-center justify-center'>
                        <h1 className='text-center text-zinc-400 text-3xl'>Sin peliculas :(</h1>
                    </div>
                )}
            </div>
        </div>
    )
}
