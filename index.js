import express from "express";

const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("LINEから通知が届きました:", req.body);
  res.sendStatus(200);
});

// ★ Vercel では listen() を使わない
export default app;
