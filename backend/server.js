const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv');
const User = require("./models/User");
const Finance = require("./models/Finance");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
  });

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User registered" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
});
app.post("/finance", async (req, res) => {
  const { userId, income, date, expense } = req.body;

  if (!userId || !income || !date || expense === undefined) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existing = await Finance.findOne({ userId, date });
    if (existing) {
      return res.status(400).json({ message: "Entry already exists for today" });
    }

    const newFinance = new Finance({ userId, income, date, expense });
    await newFinance.save();
    res.status(201).json({ message: "Finance entry saved successfully" });
  } catch (err) {
    console.error("Error saving entry:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.get("/finance/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const records = await Finance.find({ userId }).sort({ date: 1 });
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
