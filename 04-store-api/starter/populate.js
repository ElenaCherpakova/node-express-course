require('dotenv').config();

const connectDB = require('./db/connect');
const url = process.env.MONGO_URI;
const Product = require('./models/product');

const jsonProducts = require('./products.json');

const start = async () => {
  try {
    await connectDB(url);
    await Product.deleteMany();
    await Product.create(jsonProducts)
    console.log('Success!')
    process.exit(0)
  } catch (err) {
    console.log(err);
    process.exit(1)
  }
};
start();
