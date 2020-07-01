// var express = require("express");
import express from "express";
var app = express();
app.get("/", function (req, res) {
  res.send("成功了");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
