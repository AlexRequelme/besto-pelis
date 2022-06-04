import MovieCard from "../../components/MovieCard";

type MovieListSectionProps = {
    movies: any[];
};

function MovieListSection(props: MovieListSectionProps) {
    return (
        <div className="py-8">
            <h3 className="pl-2 border-l-4 border-orange-500 font-bold text-gray-800 uppercase">
                New & Upcoming Movies
            </h3>
            <div className="grid grid-flow-col mt-4">
                {props.movies?.map((itm, index) => (
                    <MovieCard
                        key={index}
                        imageUrl="https://m.media-amazon.com/images/M/MV5BOTAxOTlmOTAtMjA0Yy00YjVjLWE3OTQtYjAzMWMxOTAwZTY1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg"
                        rating={7.8}
                        title="Obi-Wan Kenobi"
                    />
                ))}
            </div>
        </div>
    );
}

export default MovieListSection;
