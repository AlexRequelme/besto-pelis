import { Router } from 'express';
import moviesRoutes from './routes/movies.routes';

const routes = Router();

routes.use('/movies', moviesRoutes);

export default routes;
