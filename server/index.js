import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/locations.js';

const app = express();

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('MongoDB connected!');
  })
  .catch((err) => console.log(err));

app.use('/locations', routes);

export default app;
