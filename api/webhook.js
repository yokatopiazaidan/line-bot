const express = require("express");
const serverless = require("serverless-http");

const app = express();
app.use(express.json());

// LINE の Verify が GET を送るので 200 を返す
app.get("/webhook", (req, res) => {
  res.status(200).send("OK");
});

// LINE の本番 Webhook は POST
app.post("/webhook", (req, res) => {
  console.log("LINEから通知:", req.body);
  res.status(200).send("OK");
});

module.exports = app;
module.exports.handler = serverless(app);
