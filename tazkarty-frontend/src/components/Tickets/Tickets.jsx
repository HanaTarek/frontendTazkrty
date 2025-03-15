import React ,{useState}from 'react';
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/css/bootstrap.css'
import './Tickets.css';


const Tickets = ({ category, price }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage pop-up visibility
    const [numberOfTickets, setNumberOfTickets] = useState(1); // State to track selected tickets

    // Function to open the pop-up
    const openPopup = () => {
        setIsPopupOpen(true);
    };

    // Function to close the pop-up
    const closePopup = () => {
        setIsPopupOpen(false);
    };

    // Function to handle ticket selection
    const handleTicketChange = (e) => {
        setNumberOfTickets(parseInt(e.target.value, 10));
    };
    const handleBookNow = () => {
        const totalPrice = price * numberOfTickets;
        Swal.fire({
            title: "Booking Confirmed!",
            text: `You have booked ${numberOfTickets} ${category} ticket(s) for $${totalPrice}.`,
            icon: "success", // Success icon
            confirmButtonText: "OK",
            confirmButtonColor: "#007bff", // Custom button color
        });
        closePopup();
    };
    return (
        <div className="card w-25 mb-3 ticket">
            <div className="card-body">
                <h5 className="card-title">{category}</h5>
                <p className="card-text">{price}</p>
                <a  className="btn btn-custom" onClick={openPopup}>Book now</a>
                      {/* Pop-up menu */}
                      {isPopupOpen && (
                    <div className="popup-overlay">
                        <div className="popup-content">
                            <h3>Select Number of Tickets</h3>
                            <select
                                value={numberOfTickets}
                                onChange={handleTicketChange}
                                className="form-select mb-3"
                            >
                                {[...Array(10).keys()].map((num) => (
                                    <option key={num + 1} value={num + 1}>
                                        {num + 1}
                                    </option>
                                ))}
                            </select>
                            <p>
                                Total: <strong>${price * numberOfTickets}</strong>
                            </p>
                            <button className="btn btn-primary me-2" onClick={handleBookNow}>
                                Confirm
                            </button>
                            <button className="btn btn-secondary" onClick={closePopup}>
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
        
    );
};

export default Tickets;
