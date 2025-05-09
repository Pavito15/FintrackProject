const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const controller = require("../controllers/mathController");

router.get("/income", auth, controller.getTotalIncome);
router.get("/expenses", auth, controller.getTotalExpenses);
router.get("/balance", auth, controller.getTotalBalance);


module.exports = router;
