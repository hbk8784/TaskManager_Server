const express = require("express");
const app = express();
const task = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const cors = require("cors");

//json object parser
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/tasks", task);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(5000, () => {
      console.log("server is listning on port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
