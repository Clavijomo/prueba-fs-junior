import { useRegisterMovie } from '../../hooks/useRegisterMovie';
import { IconCircleCheck, IconCopyPlus, IconTrashX } from '@tabler/icons-react';

export const FormRegisterMovie = () => {
    const {
        actor,
        years,
        genres,
        errors,
        loading,
        movieCreate,
        successMessage,
        handleSubmit,
        handleChange,
        addActor,
        removeActor,
        setActor,
    } = useRegisterMovie();

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
                <input
                    className="border p-3 w-full rounded-lg"
                    name="title"
                    value={movieCreate.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    type="text"
                    placeholder="Nombre"
                />
                {errors.title && (
                    <p className="text-red-500 text-sm">{errors.title}</p>
                )}
                <select
                    className="border p-3 w-full rounded-lg"
                    value={movieCreate.year}
                    onChange={(e) => handleChange('year', e.target.value)}
                >
                    <option value="" disabled>Seleccione el año</option>
                    {years.map((year) => (
                        <option
                            key={year}
                            value={year}>
                            {Number(year)}
                        </option>
                    ))}
                </select>

                {errors.year && (
                    <p className="text-red-500 text-sm">{errors.year}</p>
                )}

                <select
                    className="border p-3 w-full rounded-lg"
                    value={movieCreate.genre}
                    onChange={(e) => handleChange('genre', e.target.value)}
                >
                    <option value="" disabled>Seleccione el género</option>
                    {genres.map((genre) => (
                        <option
                            key={genre}
                            value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
                {errors.genre && (
                    <p className="text-red-500 text-sm">{errors.genre}</p>
                )}
                <textarea
                    className="border p-3 w-full rounded-lg"
                    value={movieCreate.synopsis}
                    name="synopsis"
                    onChange={(e) => handleChange('synopsis', e.target.value)}
                    placeholder="Sinopsis"
                ></textarea>


                {errors.synopsis && (
                    <p className="text-red-500 text-sm">{errors.synopsis}</p>
                )}

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <input
                            className="border p-3 w-full rounded-lg"
                            type="text"
                            value={actor}
                            onChange={(e) => setActor(e.target.value)}
                            placeholder="Agregar actor"
                        />
                        <button
                            type="button"
                            onClick={addActor}
                            className="text-blue-500 p-3 rounded-full"
                        >
                            <IconCopyPlus />
                        </button>
                    </div>
                    {movieCreate.cast.length > 0 && (
                        <div className="flex items-center gap-2 flex-wrap my-2">
                            {movieCreate.cast.map((actor, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 bg-slate-200 w-max px-2 py-1 rounded-full text-zinc-500"
                                >
                                    <p className="text-sm">{actor}</p>
                                    <button
                                        type="button"
                                        onClick={() => removeActor(index)}
                                        className="text-red-500"
                                    >
                                        <IconTrashX />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {errors.cast && (
                    <p className="text-red-500 text-sm">{errors.cast}</p>
                )}
                <button
                    disabled={loading}
                    className="btn bg-blue-700 justify-center flex gap-2 items-center p-3 mt-5 rounded-md w-1/3 text-white" type="submit">
                    {loading && (
                        <div className='h-5 w-5 border-2 border-t-2 border-t-white border-blue-300 rounded-full animate-spin' ></div>
                    )}

                    {!loading ? "Crear" : "Procesando..."}
                </button>
                {successMessage && (
                    <div className='bg-green-200 flex items-center justify-center p-3 rounded-md gap-2 mt-3'>
                        <IconCircleCheck size={'20'} className='text-green-800' />
                        <p className="text-green-800 text-sm">{successMessage}</p>
                    </div>
                )}
            </div>
        </form >
    )
}
