import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

const MovieModel = mongoose.model('Movie', movieSchema);

export default MovieModel;
