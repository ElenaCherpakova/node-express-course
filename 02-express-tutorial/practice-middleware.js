const practiceMiddleware = (req, res, next) => {
  console.log(req, res, next);
  next();
};
module.exports = practiceMiddleware;
