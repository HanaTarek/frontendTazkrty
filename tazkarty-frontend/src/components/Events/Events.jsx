import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Events.css";
import Date_Time from '../date_time/Date_Time';
import Organizers from '../Organizers/Organizers';
import Navbar from "../Navbar/Navbar";
import Image from "../Image/Image";
import Tickets from "../Tickets/Tickets";
import Locations from "../Locations/Locations";
import axios from "axios";

const Events = () => {
    const {eventname } = useParams(); // Get eventname from the URL
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        // Fetch event data from Django API using eventname
        axios.get(`http://127.0.0.1:8000/events/${eventname}/`)
            .then(response => {
                setEvent(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [eventname]); // Fetch data whenever eventname changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!event) return <div>No event data found.</div>;

    return (
        <div className="general" >
            <Image image={event.eventPhoto} />
            <Date_Time time={event.date_time} />
            <div className="hero">
                <Organizers name={event.organizer_name} />
                <Locations link={event.location} name={event.address} />
            </div>
            <div className="tickets">
                <Tickets category="VIP" price="1000" />
                <Tickets category="Gold" price="800" />
                <Tickets category="Silver" price="500" />
            </div>
        </div>
    );
};

export default Events;
