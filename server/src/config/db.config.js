import Mongoose from 'mongoose';

const mongoUrl = '';

Mongoose.connect(mongoUrl, {
    auth: {
        username: 'test',
        password: 'test12345',
    },
    authSource: 'admin',
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(() => console.log('Could not connect to MongoDB: ' + err));

const db = Mongoose.connection;
