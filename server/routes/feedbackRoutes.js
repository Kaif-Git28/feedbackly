const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
const verifyToken = require('../middleware/auth');
// POST feedback
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


// Only admin can view all feedbacks
router.get('/', verifyToken, async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ submittedAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});



module.exports = router;
