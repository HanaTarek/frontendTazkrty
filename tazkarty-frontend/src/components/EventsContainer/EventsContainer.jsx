import React from 'react';
import Grid from '@mui/material/Grid';
import UpcomingEventCard from '../landing-page/UpcomingEventCard/UpcomingEventCard';

const EventsContainer = () => {
  return (
    <Grid
      container
      direction="row"
      spacing={3} // Adds space between grid items
      sx={{
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "20px"
      }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <UpcomingEventCard 
          className="event-card"
          image="https://d3vzzcunewy153.cloudfront.net/img/17f95c00-4ab0-492d-94a6-3a647e5ea2fe/f48a0503ca5c5d7779280bad73529a30.png"
          name="Comedy Show"
          date="28/02/2025"
          location="Zayed"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <UpcomingEventCard 
          className="event-card"
          image="https://d3vzzcunewy153.cloudfront.net/img/17f95c00-4ab0-492d-94a6-3a647e5ea2fe/f49eb3c44d7e77e53841466bb178c887.jpg"
          name="Musical Show"
          date="01/03/2025"
          location="Korba"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <UpcomingEventCard 
          className="event-card"
          image="https://d3vzzcunewy153.cloudfront.net/img/17f95c00-4ab0-492d-94a6-3a647e5ea2fe/f48a0503ca5c5d7779280bad73529a30.png"
          name="Art Exhibition"
          date="05/03/2025"
          location="Downtown"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <UpcomingEventCard 
          className="event-card"
          image="https://d3vzzcunewy153.cloudfront.net/img/17f95c00-4ab0-492d-94a6-3a647e5ea2fe/f49eb3c44d7e77e53841466bb178c887.jpg"
          name="Tech Workshop"
          date="10/03/2025"
          location="New Cairo"
        />
      </Grid>
    </Grid>
  );
};

export default EventsContainer;
