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
import Swal from "sweetalert2";

const Events = () => {
    const { eventname } = useParams(); 
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedTickets, setSelectedTickets] = useState({}); 

    useEffect(() => {
        // Fetch event data from Django API using eventname
        axios.get(`http://127.0.0.1:8000/events/${eventname}/`)
            .then(response => {
                // Transform ticketCategories into the correct structure
                const eventData = response.data;
                eventData.ticketCategories = eventData.ticketCategories.map((category) => ({
                    category: category[0],
                    price: category[1],
                    seatsAvailable: category[2],
                }));
    
                setEvent(eventData);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [eventname]); 

    
    // Function to handle ticket selection changes
    const handleTicketChange = (category, numberOfTickets) => {
        setSelectedTickets((prev) => ({
            ...prev,
            [category]: numberOfTickets,
        }));
    };

    // Function to handle the "Confirm Booking" button click
    const handleBookNow = async () => {
        let totalPrice = 0;
        let bookingSummary = '';
    
        // Calculate total price and generate booking summary
        Object.entries(selectedTickets).forEach(([category, quantity]) => {
            const price = getPriceByCategory(category);
            totalPrice += price * quantity;
            bookingSummary += `${quantity} ${category} ticket(s), `;
        });
    
        // Create a PayPal order
        try {
            const response = await axios.post('http://localhost:8000/create-paypal-order/', {
                amount: totalPrice,
                currency: 'EGP', // Replace with your currency
                description: `Booking for ${bookingSummary}`,
            });
    
            const { orderID } = response.data;
    
            // Redirect to PayPal payment gateway
            window.location.href = `https://www.paypal.com/checkoutnow?token=${orderID}`;
        } catch (error) {
            console.error("Error creating PayPal order:", error);
            Swal.fire({
                title: 'Payment Error',
                text: 'Failed to create PayPal order. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#007bff',
            });
        }
    };

    // Helper function to get the price for a specific category
    const getPriceByCategory = (category) => {
        if (!event || !event.ticketCategories) return 0;
    
        const ticket = event.ticketCategories.find((ticket) => ticket.category === category);
        return ticket ? ticket.price : 0;
    };

    if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;
if (!event) return <div>No event data found.</div>;

// Ensure ticketCategories is an array
const ticketCategories = event.ticketCategories || [];

return (
    <div className="general">
        <Image image={event.eventPhoto} />
        <Date_Time time={event.date_time} />
        <div className="hero">
            <Organizers name={event.organizer_name} />
            <Locations link={event.location} name={event.address} />
        </div>
        <div className="container">
            {event.status === "available" ? (
                ticketCategories.length > 0 ? (
                    <div>
                        <div className="row">
                            {ticketCategories.map((ticket) => (
                                <Tickets
                                    key={ticket.category}
                                    category={ticket.category}
                                    price={ticket.price}
                                    seatsAvailable={ticket.seatsAvailable}
                                    onTicketChange={handleTicketChange}
                                />
                            ))}
                        </div>
                        <div className="text-center mt-4">
                            <button className="btn custom-button btn-lg" onClick={handleBookNow}>
                                Confirm Booking
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="text-center mt-4">
                        <h3>No tickets are available for this event.</h3>
                    </div>
                )
            ) : (
                <div className="text-center mt-4">
                    <h3>No tickets are available for this event.</h3>
                </div>
            )}
        </div>
    </div>
);
};

export default Events;