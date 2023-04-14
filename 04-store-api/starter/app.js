require('dotenv').config();

// async errors
require('express-async-errors');
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');

const port = process.env.PORT || 3000;
const url = process.env.MONGO_URI;

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products route</a>');
});

app.use('/api/v1/products', productsRouter);

// products route
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    await connectDB(url);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
