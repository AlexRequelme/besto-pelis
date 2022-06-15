import Express from 'express';
import Cors from 'cors';
import Helmet from 'helmet';
import Morgan from 'morgan';
import RateLimit from 'express-rate-limit';
import routes from './routes';
import { notFoundHandler } from './middlewares/not-found-handle.middleware';
import { createConnection } from './config/db.config';

const port = process.env.PORT || 8080;
const limiter = RateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});

createConnection().then(() => {
    const app = Express();

    app.use(Cors());
    app.use(Helmet());
    app.use(limiter);
    app.use(Morgan('tiny'));
    app.use(Express.json());
    app.use('/api', routes);
    app.use(notFoundHandler);
    
    app.listen(port, () => console.log(`listening on port ${port}`));
});
