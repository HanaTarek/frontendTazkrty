import React, { useState, useEffect } from "react";
import axios from "axios";
import './History.css'

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        // Get user data from local storage
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
          throw new Error("No user found. Please log in.");
        }

        const { email } = JSON.parse(storedUser);
        if (!email) {
          throw new Error("No email found in user data.");
        }

        // Fetch history from API
        const response = await axios.get(`http://127.0.0.1:8000/organizations/history/${email}/`, {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        });

        console.log("Response Headers:", response.headers);
        console.log("Response Data:", response.data);

        // Check if response is JSON
        if (typeof response.data === "object") {
          setHistory(response.data.history || []);
        } else {
          throw new Error("Invalid response format. Expected JSON.");
        }
      } catch (err) {
        console.error("Error fetching history:", err);
        setError(err.message || "Error fetching history.");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) return <p>Loading history...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="history-container">
      <h2>Booking History</h2>
      {history.length > 0 ? (
        <table className="history-table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Ticket Number</th>
              <th>Purchase Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index}>
                <td>{item.event_name}</td>
                <td>{item.ticket_number}</td>
                <td>{item.purchase_date}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No history found.</p>
      )}
    </div>
  );
};

export default History;
