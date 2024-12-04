import express from 'express';
import connectDB from './database';
import analyticsRouter from './routes/analytics';


const app = express();
const PORT = process.env.PORT!;

connectDB();

app.get('/', (req, res) => {
    res.send('Hello, MongoDB is connected!');
});

app.use('/analytics', analyticsRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
