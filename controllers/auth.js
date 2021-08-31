const User = require("../models/User");

const register = async (req, res, next) => {
  const name = "Nihat Benli";
  const email = "nihatbenli.nb@gmail.com";
  const password = "123123123";

  const user = await User.create({
    name,
    email,
    password,
  });

  res.status(200).json({ success: true, data: user });
};

module.exports = {
  register,
};
