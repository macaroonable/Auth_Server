const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there does it work" });
});

app.listen(process.env.port || 5000);
