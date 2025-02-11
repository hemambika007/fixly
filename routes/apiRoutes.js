const express = require("express");
const router = express.Router();


router.get("/hello", (req, res) => {
  res.json({ message: "Hello from Fixly API!" });
});


router.post("/data", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Received data for ${name}` });
});

module.exports = router;
