const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB is connected.");
    })
    .catch((err) => console.log(err.message));
};
module.exports = connectDatabase;
