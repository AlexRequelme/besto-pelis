import Movie from '../models/movie.model';

export const getAllMovies = async (_req, res) => {
    const movies = await Movie.find()
    return res.json(movies);
};

export const getMovieById = (req, res) => {
    const id = req.params.id;
    return res.json(id);
};

export const addMovie = (req, res) => {
    const payload = req.body;
    res.json(payload);
};

export const updateMovieById = (req, res) => {
    const id = req.params.id;
    return res.json(id);
};

export const deleteMovieById = (req, res) => {
    const id = req.params.id;
    return res.json(id);
};
