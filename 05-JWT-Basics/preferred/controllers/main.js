const jwt = require('jsonwebtoken');

const logon = async (req, res) => {
  const { name, password } = req.body;
  if (!name.trim() || !password.trim()) {
    return res.status(400).json({ message: 'Name and password are required' });
  }
  const token = jwt.sign({ name }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  });
  res.status(200).json({ msg: 'user created', token });
};

const hello = async (req, res) => {
  let { name } = req.user;
  res.status(200).json({
    msg: `Hello, ${name}!`,
  });
};

module.exports = { logon, hello };
