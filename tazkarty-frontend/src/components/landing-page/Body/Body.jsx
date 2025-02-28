import React from 'react';
import ContactContainer from '../../ContactContainer/ContactContainer';
import Header from '../../Header/Header';
import EventsContainer from '../../EventsContainer/EventsContainer';
const Body = () => {
  return (
    <div id="body">
      <Header/>
      <EventsContainer />
      <ContactContainer />
    </div>
  );
};

export default Body;