const router = require("express").Router();
const authController = require("../controller/auth.controller");

// rota de login
router.post("/login", authController.loginController);

module.exports = router;