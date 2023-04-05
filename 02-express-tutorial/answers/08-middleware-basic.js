const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next()
};

app.get('/', logger, (req, res) => {
  res.send('Home');
});

app.get('/about', logger, (req, res) => {
  res.send('About');
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
