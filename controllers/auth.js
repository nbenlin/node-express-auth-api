const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const asynErrorWrapper = require("express-async-handler");
const sendJwtToClient = require("../helpers/auth/sendJwtToClient");

const register = asynErrorWrapper(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });
  sendJwtToClient(user, res);
});

module.exports = {
  register,
};
