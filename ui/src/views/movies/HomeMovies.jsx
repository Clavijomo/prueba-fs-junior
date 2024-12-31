import { Link } from 'react-router-dom';
import { Alert } from '../../components/shared/Alert';
import { useMovies } from '../../hooks/useMovies';
import { CardMovie } from './_CardMovie';
import { IconArrowLeft } from '@tabler/icons-react'

export const HomeMovies = () => {
    const { error, movies } = useMovies();

    return (
        <div className='w-full'>
            <div className='flex flex-col gap-3'>
                <h1 className="text-white text-4xl">Catálogo</h1>
                <p className='text-white'>Disfruta de las películas del momento, catálogos imperdibles, detalles y más</p>
            </div>
            {movies && movies.length > 0 ? (
                <div className='mt-10 grid grid-cols-3 gap-4 items-center'>
                    {movies.map((movie) => (
                        <Link key={movie.id} to={`movies/${movie.id}`}>
                            <CardMovie movie={movie} />
                        </Link>
                    ))}
                </div>
            ) : (
                error ? (
                    <Alert error={error} />
                ) : (
                    <div className='h-56 w-full flex flex-col justify-center items-center'>
                        <p className='text-3xl text-white'>Oops! No hay películas</p>
                        <Link
                            className='text-blue-500 font-semibold flex items-center gap-3 mt-5'
                            to={'/create-movie'}>
                            <IconArrowLeft />
                            Comienza creando una
                        </Link>
                    </div>
                )
            )}
        </div>
    )
}
