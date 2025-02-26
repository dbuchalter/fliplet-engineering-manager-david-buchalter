const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const processUsers = require("./data-processor");
const rateLimiter = require("./rate-limiter");

const app = express();
const PORT = process.env.PORT || 3000;

 
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(rateLimiter); // Apply rate limiter globally

// API to process users
app.post("/process-users", async (req, res) => {
  try {
    if (!req.body.users || !Array.isArray(req.body.users)) {
      return res.status(400).json({ error: "Invalid input: users array is required." });
    }

    const processedUsers = await processUsers(req.body.users);
    res.json({ success: true, data: processedUsers });
  } catch (error) {
    console.error("Error processing users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});




// Health check API
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});