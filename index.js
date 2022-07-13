const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi Node and Docker!!!");
});

app.listen(3000);