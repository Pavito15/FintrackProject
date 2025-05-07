const router = require("express").Router();
const controller = require("../controllers/authController");

router.get("/", controller.loginWithToken);
router.post("/", controller.login);

module.exports = router;
