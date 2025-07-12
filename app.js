const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const authRoute = require('./routes/authRoute');
const adminRoute = require('./AdminFunction/AdminRoutes');
const PassengerRoute = require('./routes/PassengerRoute');
const db = require('./models');
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", authRoute);
app.use("/admin", adminRoute);
app.use("/passenger", PassengerRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start Server After DB Sync
db.sequelize.sync({})
  .then(() => {
    console.log('Database synced');
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server started successfully on port: ${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to sync database:', err);
  });
