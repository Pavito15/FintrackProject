const express = require('express');
const router = express.Router();
const movementController = require('../controllers/movementController');

router.post('/movements', movementController.createMovement);
router.get('/movement/:id', movementController.getMovementById);
router.put('/movement/:id', movementController.updateMovement);
router.delete('/movement/:id', movementController.deleteMovement);

module.exports = router;
