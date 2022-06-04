export const getAllMovies = (_req, res) => {
    return res.json('get all');
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
