const express = require('express');
const app = express();
const port = 3000;

const authRoute = require('./routes/authRoute');
const db = require('./models'); // <- Import this here
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", authRoute);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

db.sequelize.sync({})
  .then(() => {
    console.log('Database synced');
    app.listen(port, () => {
      console.log(`XLR app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to sync database:', err);
  });
