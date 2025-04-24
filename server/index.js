const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config(); // 🔥 This loads your .env file

// Middleware
app.use(cors());
app.use(express.json());

const feedbackRoutes = require('./routes/feedbackRoutes');
app.use('/api/feedback', feedbackRoutes);

const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch((err) => console.log("❌ DB Connection Error:", err));  

// Routes
app.use("/api/feedback", require("./routes/feedbackRoutes"));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
