const express = require('express');

const routes = express.Router();

routes.get("/", (req, res) => {
    res.send("Hi Node and Docker!!!");
  });

module.exports = routes;