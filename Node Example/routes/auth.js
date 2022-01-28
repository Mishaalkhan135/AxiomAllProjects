const express = require("express");
const router = express.Router();
const { AuthLogin, Register, getUsers } = require("../controllers/users");

router.post("/login", AuthLogin);
router.post("/register", Register);
router.post("/get_users", getUsers);
module.exports = router;
