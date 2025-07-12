const express = require('express');
const {
  getAllPassengers,
  getPassengerById,
  updatePassenger,
  deletePassenger,
  addPassenger,
} = require("../controller/PassengerController");
const router = express.Router();

router.post('/', addPassenger);           // Create
router.get('/', getAllPassengers);           // Read all
router.get('/:id', getPassengerById);        // Read one
router.put('/:id', updatePassenger);         // Update
router.delete('/:id', deletePassenger);      // Dele

module.exports = router;
