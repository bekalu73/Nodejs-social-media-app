const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.listen(8800, () => {
  console.log("backend server is Ready @ http://localhost:8800");
});
