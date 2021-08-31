const CustomError = require("../../helpers/error/CustomError");
const jwt = require("jsonwebtoken");
const { isTokenIncludedToHeaders } = require("../../helpers/auth/tokenHelpers");

const getAccessToRoute = (req, res, next) => {
  if (!isTokenIncludedToHeaders(req)) {
    return next(
      new CustomError("You are not authorized to access this route", 401)
    );
  }
  next();
};
module.exports = { getAccessToRoute };
