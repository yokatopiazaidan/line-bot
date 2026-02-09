import express from "express";
import serverless from "serverless-http";

const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("LINEから通知:", req.body);
  res.status(200).send("OK");
});

export const handler = serverless(app);
