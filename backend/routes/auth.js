const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth");


router.post("/createuser", AuthController.createUser);


const user = require("../models/user");

module.exports = router;
