import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Container,
} from '@mui/material';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/feedback', formData);
      setSuccessMsg('🎉 Feedback submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccessMsg(''), 3000); // Reset msg after 3s
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card elevation={4}>
        <CardContent>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Your Thoughts"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            <Box textAlign="center" mt={2}>
              <Button variant="contained" color="primary" type="submit">
                Submit Feedback
              </Button>
            </Box>

            {successMsg && (
              <Typography
                variant="body1"
                color="green"
                align="center"
                sx={{ mt: 2 }}
              >
                {successMsg}
              </Typography>
            )}
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FeedbackForm;
