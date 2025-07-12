// models/passengerTrip.model.js (or .ts if using TypeScript)
module.exports = (sequelize, DataTypes) => {
  const PassengerTrip = sequelize.define('PassengerTrip', {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    travelDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    passportNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    visaNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    baggageSpace: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  return PassengerTrip;
};
