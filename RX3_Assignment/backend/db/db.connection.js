require("dotenv").config({ path: "D:/redux/RX3_Assignment/backend/.env" });
const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB_URI;

const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(mongoURI);
    if (connection) {
      console.log("Connected Successfully");
    }
  } catch (error) {
    console.log("Connection Failed", error);
  }
};

module.exports = { initializeDatabase };
