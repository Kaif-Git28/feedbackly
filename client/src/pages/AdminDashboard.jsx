import React from "react";
import FeedbackList from "../component/FeedbackList";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin/login");
  };

  return (
    <div>
      <h2>📊 Admin Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <FeedbackList />
    </div>
  );
};


export default AdminDashboard;
