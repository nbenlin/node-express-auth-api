const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./helpers/database/connectDatabase");
const routers = require("./routers");

const app = express();

// Environment Variables
dotenv.config({
  path: "./config/env/config.env",
});
const PORT = process.env.PORT;

// MongoDB Connection
connectDatabase();

// Routers Middleware
app.use("/api", routers);

app.listen(PORT, () => {
  console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`);
});
