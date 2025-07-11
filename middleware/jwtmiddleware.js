const express = require('express');
const jwt = require('jsonwebtoken');

const SECRET = 'sannithisverygood';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  console.log(authHeader);
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;