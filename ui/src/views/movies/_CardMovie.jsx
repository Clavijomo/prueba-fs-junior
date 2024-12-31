import PosterMovie from '../../resources/images/poster.jpg'

export const CardMovie = ({ movie }) => {
    const {
        title,
        year,
        genre,
        synopsis,
        cast
    } = movie;

    return (
        <div
            className="relative bg-black bg-center hover:cursor-pointer hover:transition hover:shadow-2xl hover:bg-gray-600 p-4 h-64 rounded-2xl space-y-4 flex flex-col justify-end shadow-xl"
            style={{ backgroundImage: `url(${PosterMovie})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-55 rounded-2xl"></div>
            <div className="relative z-10 space-y-3">
                <div>
                    <h1 className="text-white text-3xl my-2">{title}</h1>
                    <div className="flex gap-2">
                        <p className="text-gray-400">{year}</p>
                        <p className="text-blue-400">{genre}</p>
                    </div>
                </div>
                <p className="text-gray-400">{synopsis}</p>
                {cast && cast.length > 0 && (
                    <div className="flex gap-3 flex-wrap">
                        {cast.map((castMember, i) => (
                            <p className="bg-slate-400 px-2 py-1 text-gray-800 rounded-full text-sm" key={i}>
                                {castMember}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
