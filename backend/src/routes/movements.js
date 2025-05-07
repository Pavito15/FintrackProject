const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const controller = require("../controllers/movementController");

router.post("/", auth, controller.createMovement);
router.get("/", auth, controller.getMovements);
router.get("/:id", auth, controller.getMovement);
router.put("/:id", auth, controller.updateMovement);
router.delete("/:id", auth, controller.deleteMovement);

module.exports = router;
