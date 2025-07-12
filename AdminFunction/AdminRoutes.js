const { User } = require("../models");
const express = require('express');
const router = express.Router();



router.get('/getall', (req, res) => {
    const data = User.findAll({});
    data
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: "Failed to fetch users" });
        });
}); 

module.exports = router;