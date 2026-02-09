export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).send("OK");
  }

  if (req.method === "POST") {
    console.log("LINEから通知:", req.body);
    return res.status(200).send("OK");
  }

  return res.status(405).send("Method Not Allowed");
}
