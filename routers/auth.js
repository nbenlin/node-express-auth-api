const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

router.get("/register", (req, res) => {
  res.send("Auth register page");
});

module.exports = router;
