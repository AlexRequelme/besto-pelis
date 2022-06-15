import mongoose from 'mongoose';

const mongoUrl = 'mongodb://mongodb:27017/besto-pelis-db';

//const db = mongoose.connection;

export const createConnection = () => {
    return mongoose.connect(mongoUrl, {
        /* auth: {
            username: 'test',
            password: 'test12345',
        },
        authSource: 'admin', */
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
