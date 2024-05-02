import express from 'express';
/* import { PORT, MONGO_URL } from './config.js'; */
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const PORT = PORT
const MONGO_URL = Mongo_URL

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());


app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/books', booksRoute);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
