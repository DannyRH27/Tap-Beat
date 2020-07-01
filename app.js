var express = require("express");

var app = express();

app.use(express.static("./"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("Circles");
});

app.get("*", function (req, res) {
  res.render("Circles");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, process.env.IP);
