require("dotenv").config();
const mongoose = require("mongoose");

const mongoDBUrl = process.env.MONGODB_URL;

module.exports = () => {
  return mongoose.connect(mongoDBUrl);
};
