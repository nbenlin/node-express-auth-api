const express = require("express");
const router = express.Router();
const { register, tokentest } = require("../controllers/auth");
const { getAccessToRoute } = require("../middlewares/auth/auth");

router.post("/register", register);
router.get("/tokentest", getAccessToRoute, tokentest);

module.exports = router;
