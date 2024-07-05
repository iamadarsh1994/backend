require('dotenv').config();
const express = require("express");
const app = express();

app.get("/hey", (req, res) => {
  res.send("hello world");
});
app.get("/twitter", (req, res) => {
  res.send("Adarsh");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please login at chai aur code</h1>");
});
app.get("/minitales", (req, res) => {
  res.send("<h2><a href='https://minitales.shop'>minitales.shop</a></h2>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
