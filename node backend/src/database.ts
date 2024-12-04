import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI!;
        await mongoose.connect(uri, {});

        console.log('MongoDB connected successfully');
    } catch (err) {
        if (err instanceof Error) {
            console.error('MongoDB connection failed:', err.message);
        } else {
            console.error('MongoDB connection failed with an unknown error');
        }
        process.exit(1); // Exit the process if the connection fails
    }
};

export default connectDB;
