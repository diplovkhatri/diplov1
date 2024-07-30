const express = require("express");
const { addUser, UserDetails } = require("../Controller/UserController");

const router = express.Router();

router.post("/register", addUser);
router.get("/details/:id", UserDetails);

module.exports = router;
