import MovieCard from "./MovieCard.jsx";
const MovieList = ({ title, movies = [] }) => {
    if (movies.length === 0) {
        return (
            <div className="p-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-sm text-gray-400">No movies available.</p>
            </div>
        );
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold  mb-8 text-white ">{title}</h2>
            
            <div className="flex gap-8 overflow-x-scroll  touch-scroll-fixwhitespace-nowrap hide-scrollbar cursor-grab active:cursor-grabbing ">
                {movies.map((m) => (
                    <div key={m.id} className="w-50 flex"> 
                        <MovieCard posterPath={m.poster_path} title={m.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;