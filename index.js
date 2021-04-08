const config = require("config");
const dotenv = require("dotenv");
const cors = require("cors");
const Joi = require("joi");

const mongoose = require("mongoose");
const users = require("./routes/users");

const express = require("express");
const app = express();

dotenv.config();

mongoose
  .connect("mongodb://localhost:27017/UserApp", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

//middlewares
app.use(express.json());
app.use(cors());
app.use("/api/users", users);

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
