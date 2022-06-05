function MovieBannerSection() {
    return (
        <div className="w-full h-72 bg-white rounded-md flex justify-between">
            <img
                className="w-1/2 rounded-l-md object-cover"
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F3020C5A6702EF51552E388CEF7EDFE46CC96A370C2E1C57F9533573DCEFA766/scale?width=1200&aspectRatio=1.78&format=jpeg"
                alt="banner-img"
            />
            <div className="flex-1 px-4 py-8 flex flex-col gap-2">
                <span className="font-bold text-2xl">{"Obi-Wan Kenobi"}</span>
                <p className="text-gray-600">
                    Jedi Master Obi-Wan Kenobi watches over young Luke Skywalker
                    and evades the Empire's elite Jedi hunters during his exile
                    on the desert planet Tatooine.
                </p>
                <div className="py-4 flex gap-2">
                    {["Action", "Adventure", "Sci-Fi"].map((catg, index) => (
                        <span
                            key={index}
                            className="rounded-full bg-gray-200 text-gray-800 py-2 px-4 text-sm"
                        >
                            {catg}
                        </span>
                    ))}
                </div>
                <div className="h-full flex flex-col justify-end">
                    <a
                        href=""
                        className="self-end flex items-center gap-2 underline"
                    >
                        <img
                            className="h-11"
                            src="https://img.icons8.com/external-filled-agus-raharjo/64/undefined/external-movie-social-media-filled-agus-raharjo.png"
                        />
                        View trailer on youtube
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MovieBannerSection;
