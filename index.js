const express = require('express');
const app = express();
const port = 3000;

const authRoute = require('./routes/authRoute');
const adminRoute = require('./AdminFunction/AdminRoutes');
const PassengerRoute = require('./routes/PassengerRoute'); // <- Import the passenger route

// <- Import the admin route
const db = require('./models'); // <- Import this here
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", authRoute);
app.use("/admin", adminRoute);
app.use('/passenger',PassengerRoute); // <- Use the admin route


app.get('/', (req, res) => {
    res.send('Hello World!');
});

db.sequelize.sync({})
  .then(() => {
    console.log('Database synced');
    app.listen(port, () => {
      console.log(`server started Successfully:${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to sync database:', err);
  });
