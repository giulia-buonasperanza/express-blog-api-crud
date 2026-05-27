import express from 'express';
import postsRouter from './routers/posts.router.js';

const PORT = process.env.PORT || 3000;
const URL = process.env.URL || `http://localhost:${PORT}`;

const app = express();

app.use(express.json());

app.use('/posts', postsRouter);


app.listen(PORT, (error) => {
  if (error) {
    console.error('Error starting the server:', error);
  } else {
    console.log(`Server is running on ${URL}`);
  }
});
