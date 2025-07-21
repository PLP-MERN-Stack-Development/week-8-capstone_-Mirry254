const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const fetchGoals = async () => {
  const res = await fetch(`${API_BASE_URL}/api/goals`);
  return res.json();
};

// Add more API functions as needed
