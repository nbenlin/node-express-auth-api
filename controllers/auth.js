const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const asynErrorWrapper = require("express-async-handler");

const register = asynErrorWrapper(async (req, res, next) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  res.status(200).json({ success: true, data: user });
});

module.exports = {
  register,
};
