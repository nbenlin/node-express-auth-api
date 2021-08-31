const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const asynErrorWrapper = require("express-async-handler");
const { sendJwtToClient } = require("../helpers/auth/tokenHelpers");

const register = asynErrorWrapper(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });
  sendJwtToClient(user, res);
});

const getUser = (req, res, next) => {
  res.json({
    success: true,
    data: {
      id: req.user.id,
      name: req.user.name,
    },
  });
};

module.exports = {
  register,
  getUser,
};
