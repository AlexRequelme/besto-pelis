import { Router } from 'express';
import * as controller from '../controllers/movies.controller';

const moviesRoutes = Router();

moviesRoutes.get('/', controller.getAllMovies);
moviesRoutes.get('/:id', controller.getMovieById);
moviesRoutes.post('/', controller.addMovie);
moviesRoutes.put('/:id', controller.updateMovieById);
moviesRoutes.delete('/:id', controller.deleteMovieById);

export default moviesRoutes;
