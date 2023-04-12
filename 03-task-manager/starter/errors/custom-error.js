// creating a new instance of the class
class CustomAPIError extends Error {
  constructor(message, statusCode) {
    // since we set up a child class we call super method which invokes a constructor of a parent class
    super(message); //
    this.statusCode = statusCode;
  }
}
const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode);
};
module.exports = {
    CustomAPIError,
    createCustomError
};