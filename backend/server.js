const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const projectRouter = require("./routes/projectList");
const projectDetailRouter = require("./routes/projectDetail");
const searchRouter = require("./routes/search");
//connecting to mongoDb
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});
const app = express();

const port = process.env.SERVER_PORT;
app.use(cors());
//implementing all routes
app.use(projectRouter);
app.use(projectDetailRouter);
app.use(searchRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
