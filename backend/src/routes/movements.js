const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const controller = require("../controllers/movementController");

/* router.post('/', auth, controller.createMovement);
router.get('/:id', auth, controller.getMovement);
router.put('/:id', auth, controller.updateMovement);
router.delete('/:id', auth, controller.deleteMovement); */

router.post("/", controller.createMovement);
router.get("/", controller.getMovements);
router.get("/:id", controller.getMovement);
router.put("/:id", controller.updateMovement);
router.delete("/:id", controller.deleteMovement);

module.exports = router;
