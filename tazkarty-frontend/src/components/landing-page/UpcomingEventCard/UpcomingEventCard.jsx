import React from 'react';
import './UpcomingEventCard.css';

const UpcomingEventCard = (props) => {
  return (
    <div className={props.className}>
      <img src={props.image}  width={200} height={150} alt="event" />
      <h2>{props.name}</h2>
      <p>Date: {props.date}</p>
      <p>Location: {props.location}</p>
    </div>
  );
};

export default UpcomingEventCard;
