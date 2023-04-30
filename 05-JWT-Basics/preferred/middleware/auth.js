const jwt = require('jsonwebtoken');

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      message: 'No token provided',
    });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { name } = decoded;
    req.user = { name };
    next();
  } catch (err) {
    return res.status(401).json({
      message: 'Not authorized to access this route',
    });
  }
};

module.exports = authenticationMiddleware;
