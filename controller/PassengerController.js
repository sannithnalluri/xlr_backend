const db = require('../models');
const PassengerModel = db.passenger;

const addPassenger = async (req, res) => {
  try {
    const {
      fullName,
      phoneNumber,
      origin,
      destination,
      travelDate,
      passportNumber,
      visaNumber,
      baggageSpace,
      notes,
    } = req.body;

    if (!fullName || !phoneNumber || !origin || !destination || !travelDate || !baggageSpace) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const savedPassenger = await PassengerModel.create({
      fullName,
      phoneNumber,
      origin,
      destination,
      travelDate,
      passportNumber,
      visaNumber,
      baggageSpace,
      notes,
    });

    res.status(201).json({
      message: "Passenger trip saved successfully.",
      passenger: savedPassenger,
    });
  } catch (error) {
    console.error("Error saving passenger:", error);
    res.status(500).json({ message: "Server error while saving passenger." });
  }
};

const getAllPassengers = async (req, res) => {
  try {
    const passengers = await PassengerModel.findAll({});
    res.json(passengers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
 const getPassengerById = async (req, res) => {
  try {
    const passenger = await PassengerModel.findByPk(req.params.id);
    if (!passenger) return res.status(404).json({ message: 'Passenger not found' });
    res.json(passenger);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
 const updatePassenger = async (req, res) => {
  try {
    const updated = await PassengerModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Passenger not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

 const deletePassenger = async (req, res) => {
  try {
    const deleted = await PassengerModel.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Passenger not found' });
    res.json({ message: 'Passenger deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
    addPassenger,
    getAllPassengers,
    getPassengerById,
    updatePassenger,
    deletePassenger

}
