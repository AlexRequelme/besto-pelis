type MovieCardProps = {
    imageUrl: string;
    rating: number;
    title: string;
};

function MovieCard(props: MovieCardProps) {
    return (
        <div className="flex flex-col gap-2">
            <img
                className="w-48 rounded-lg"
                src={props.imageUrl}
                alt={`img-${props.title.replace(" ", "-")}`}
            />
            <div className="flex flex-col">
                <span>{props.rating}</span>
                <span>{props.title}</span>
            </div>
        </div>
    );
}

export default MovieCard;
