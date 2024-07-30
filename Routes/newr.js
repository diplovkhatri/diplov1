const express = require("express");
const { addUser, userDetails } = require("../Controller/newc");

const router = express.Router();

router.post("/register", addUser);
// router.get("/user/:id", userDetails);

module.exports = router;
