import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import UpcomingEventCard from '../landing-page/UpcomingEventCard/UpcomingEventCard';
import './EventsContainer.css';
import axios from "axios";
import { Link } from 'react-router-dom';

const eventsAPI_URL = "http://127.0.0.1:8000/events/";

const EventsContainer = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios.get(eventsAPI_URL)
      .then(response => {
        setEvents(response.data);
        setLoading(false);
        console.log("Events loaded:", response.data);
      })
      .catch(error => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);
  
  if (loading) {
    return (<div>Loading events...</div>);
  }
  
  return (
    <Grid
      container
      direction="row"
      spacing={3}
      sx={{
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "20px"
      }}
    >

      {events.map((event, index) => {
        if (!event.title) {
          console.error("Eventname is missing for event:", event);
          return null; // Skip rendering this event
        }
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link to={`/events/${event.title}`} style={{ textDecoration: 'none' }}>
              <UpcomingEventCard 
                className="event-card"
                image={event.eventPhoto || "https://via.placeholder.com/300"} // Fallback image
                name={event.title || "No Title"}
                date={event.date_time ? new Date(event.date_time).toLocaleDateString() : "No Date"}
                location={event.location || "No Location"}
              />
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default EventsContainer;
