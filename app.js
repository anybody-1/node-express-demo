var express = require("express");
var app = express();

app.get("/xxx", function (req, res) {
  res.send("成功了");
});

app.listen(4000, function () {
  console.log("Example app listening on port 3000!");
});
