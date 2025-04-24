const express = require('express');
const router = express.Router();

// For now, hardcode admin credentials
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "kaif123"; // you'll improve this later

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    return res.status(200).json({ success: true, message: "Login successful" });
  } else {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

module.exports = router;
