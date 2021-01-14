const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/evenst", (req, res) => {
  const event = req.body;
  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);
  res.send({ status: "ok" });
});

app.listen(4005, () => {
  console.log("server unning on port 4005");
});
