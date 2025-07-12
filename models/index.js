const { Sequelize } = require('sequelize');

// Use Render's external connection string
const sequelize = new Sequelize('postgresql://xlr_user_user:gRg7oYdIGq0YT8K4d0QFG1ZwhMAXnXve@dpg-d1ofl8jipnbc73eveepg-a.oregon-postgres.render.com/xlr_user', {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = require('./userModel')(sequelize, Sequelize);
db.passenger = require('./PassengerModel')(sequelize, Sequelize);

module.exports = db;
