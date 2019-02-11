const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..","public", "index.html"));
});

app.listen(3000, () => {
    console.log("server start at3000");
  });