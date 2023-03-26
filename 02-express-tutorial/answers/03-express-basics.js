const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});
app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
