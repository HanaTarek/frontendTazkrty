import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Add_Event.css";
const InsertEventPage = () => {
  const [formData, setFormData] = useState({
    eventname: "",
    organizer_name: "",
    title: "",
    description: "",
    date_time: "",
    status: "",
    location: "",
    address: "",
    number_of_seats: "",
    eventPhoto: "",
    ticketCategories: [
      { category: "", price: "", seatsAvailable: "", seatsSold: "" },
    ],
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTicketChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTickets = [...formData.ticketCategories];
    updatedTickets[index][name] = value;
    setFormData({ ...formData, ticketCategories: updatedTickets });
  };

  const addTicketCategory = () => {
    setFormData({
      ...formData,
      ticketCategories: [
        ...formData.ticketCategories,
        { category: "", price: "", seatsAvailable: "", seatsSold: "" },
      ],
    });
  };

  const removeTicketCategory = (index) => {
    const updatedTickets = formData.ticketCategories.filter((_, i) => i !== index);
    setFormData({ ...formData, ticketCategories: updatedTickets });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user || user.role !== "Organization") {
      alert("Permission denied: Only Organization role can insert an event.");
      return;
    }

    const token = localStorage.getItem("access_token");
    if (!token) {
      alert("Error: User not authenticated.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/organizations/insert_event/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      alert("Event inserted successfully!");
      setFormData({
        eventname: "",
        organizer_name: "",
        title: "",
        description: "",
        date_time: "",
        status: "",
        location: "",
        address: "",
        number_of_seats: "",
        eventPhoto: "",
        ticketCategories: [{ category: "", price: "", seatsAvailable: "", seatsSold: "" }],
      });
    } catch (error) {
      console.error("Error inserting event:", error.response?.data || error.message);
      alert("Error inserting event: " + JSON.stringify(error.response?.data || error.message));
    }
  };

  return (
    <div className="insert-event-page">
      <div className="insert-event-container">
        <h2>Insert Event</h2>
        {user?.role === "Organization" || user?.role === "organization" ? (
          <form onSubmit={handleSubmit}>
            <input type="text" name="eventname" placeholder="Event Name" value={formData.eventname} onChange={handleChange} className="insert-event-input" required />
            <input type="text" name="organizer_name" placeholder="Organizer Name" value={formData.organizer_name} onChange={handleChange} className="insert-event-input" required />
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="insert-event-input" required />
            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="insert-event-input" required />
            <input type="datetime-local" name="date_time" value={formData.date_time} onChange={handleChange} className="insert-event-input" required />
            <input type="text" name="status" placeholder="Status" value={formData.status} onChange={handleChange} className="insert-event-input" required />
            <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="insert-event-input" required />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="insert-event-input" required />
            <input type="number" name="number_of_seats" placeholder="Number of Seats" value={formData.number_of_seats} onChange={handleChange} className="insert-event-input" required />
            <input type="url" name="eventPhoto" placeholder="Event Photo URL" value={formData.eventPhoto} onChange={handleChange} className="insert-event-input" required />

            <h3>Ticket Categories</h3>
            {formData.ticketCategories.map((ticket, index) => (
              <div key={index} className="insert-event-ticket">
                <input type="text" name="category" placeholder="Category" value={ticket.category} onChange={(e) => handleTicketChange(index, e)} className="insert-event-input" required />
                <input type="number" name="price" placeholder="Price" value={ticket.price} onChange={(e) => handleTicketChange(index, e)} className="insert-event-input" required />
                <button type="button" onClick={() => removeTicketCategory(index)} className="insert-event-btn insert-event-btn-remove">
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={addTicketCategory} className="insert-event-btn insert-event-btn-add">
              Add Ticket Category
            </button>
            <button type="submit" className="insert-event-btn insert-event-btn-submit">
              Submit Event
            </button>
          </form>
        ) : (
          <p>You do not have permission to add an event.</p>
        )}
      </div>
    </div>
  );
};

export default InsertEventPage;
