const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const { people } = require('./data');

//static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));

// parse.json
app.use(express.json());

app.post('/login', (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome, ${name}!`);
  } else {
    return res.status(401).send('Please provide credentials');
  }
});

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide a name' });
  }
  res.status(201).json({ success: true, person: name });
});

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide a name' });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `person not found with this ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

app.delete('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `person not found with this ${id}` });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
