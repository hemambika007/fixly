require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To handle JSON requests

// Import and use routes
const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);  // All routes will start with "/api"

app.get("/", (req, res) => {
  res.send("Fixly Node.js server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
