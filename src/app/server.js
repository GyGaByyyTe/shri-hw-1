const fs = require("fs");
const express = require("express");
const app = express();
const port = 8000;

app.use(express.static(__dirname + "../../../build/"));

app.get("/status", (req, res) => {
  res.send("time!");
});

app.get("/api/events", (req, res) => {
  const filePath = __dirname + "/events.json";
  res.set({ "content-type": "application/json; charset=utf-8" });
  fs.createReadStream(filePath, {
    flags: "r"
  }).pipe(res);
});

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
