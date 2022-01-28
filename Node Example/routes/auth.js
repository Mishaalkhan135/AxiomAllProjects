const express = require("express");
const router = express.Router();
const { AuthLogin, Register } = require("../controllers/users");

router.post("/login", AuthLogin);
router.post("/register", Register);
module.exports = router;
