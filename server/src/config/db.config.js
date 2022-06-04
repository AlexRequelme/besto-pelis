import mongoose from 'mongoose';

const mongoUrl = '';

mongoose
    .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(() => console.log(err));

const db = mongoose.connection;
