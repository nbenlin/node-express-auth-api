const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/error/customErrorHandler");
const routers = require("./routers");

const app = express();

// Express - Body Middleware
app.use(express.json());
// Environment Variables
dotenv.config({
  path: "./config/env/config.env",
});
const PORT = process.env.PORT;

// MongoDB Connection
connectDatabase();

// Routers Middleware
app.use("/api", routers);

// Error Handler
app.use(customErrorHandler);

app.listen(PORT, () => {
  console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`);
});
