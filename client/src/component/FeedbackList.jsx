import axios from 'axios';
import { useEffect, useState } from 'react';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/feedback', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setFeedbacks(res.data);
      } catch (err) {
        console.error('Failed to fetch feedbacks', err);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="feedback-list">
      <h2>🗂 Recent Feedback</h2>
      {feedbacks.map((fb) => (
        <div key={fb._id} className="feedback-card">
          <p><strong>Message:</strong> {fb.message}</p>
          <p><em>Submitted At:</em> {new Date(fb.submittedAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
