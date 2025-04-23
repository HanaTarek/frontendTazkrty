import React, { useState } from 'react';

const Tickets = ({ category, price, seatsAvailable, onTicketChange }) => {
    const [numberOfTickets, setNumberOfTickets] = useState(1);

    const handleTicketChange = (e) => {
        const newNumberOfTickets = parseInt(e.target.value, 10);
        setNumberOfTickets(newNumberOfTickets);
        onTicketChange(category, newNumberOfTickets); // Notify parent about the change
    };

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{category}</h5>
                    <p className="card-text">{price} LE</p>
                    <p className="card-text">Seats Available: {seatsAvailable}</p>
                    <div className="form-group">
                        <label htmlFor={`ticket-select-${category}`}>Number of Tickets:</label>
                        {seatsAvailable === 0 ? (
                            <p className="text-danger">Sold Out</p>
                        ) : (
                            <select
                                id={`ticket-select-${category}`}
                                value={numberOfTickets}
                                onChange={handleTicketChange}
                                className="form-select"
                            >
                                {[...Array(Math.min(seatsAvailable, 10)).keys()].map((num) => (
                                    <option key={num + 1} value={num + 1}>
                                        {num + 1}
                                    </option>
                                ))}
                            </select>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tickets;