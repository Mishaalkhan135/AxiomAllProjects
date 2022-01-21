const express = require("express");
const router = express.Router();
const { AuthLogin } = require("../controllers/users");
router.post("/login", AuthLogin);
module.exports = router;
