// In order to make the server work in my package.json I changed the start script to "node practiceExpress.js"

const express = require('express');
const path = require('path');
const app = express();
const practiceMiddleware = require('./practice-middleware')
const port = 3000;

app.use(practiceMiddleware);
app.use(express.static('./new-public'))

app.get('/sample', (req, res) => {
  res.send("This is working")
});

app.all('*', (req, res) => {
  res.status(404).send('resource not found');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
