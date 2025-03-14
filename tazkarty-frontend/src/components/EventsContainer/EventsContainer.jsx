import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import UpcomingEventCard from '../landing-page/UpcomingEventCard/UpcomingEventCard';
import axios from "axios";

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
  }, []);
  
  if (loading) {
    return <div>Loading events...</div>;
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
      {events.length > 0 ? (
        events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <UpcomingEventCard 
              className="event-card"
              image={event.eventPhoto }
              name={event.title}
              date={new Date(event.date_time).toLocaleDateString() }
             
            />
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <div>No events found. Please check back later.</div>
        </Grid>
      )}
    </Grid>
  );
};

export default EventsContainer;