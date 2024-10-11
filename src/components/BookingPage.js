import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BookingPage.css'; // Importing CSS for styling

function BookingPage() {
    const [bookingDetails, setBookingDetails] = useState({
        checkIn: '',
        checkOut: '',
        guests: 1,
        roomType: 'Single',
    });

    const [secondBookingDetails, setSecondBookingDetails] = useState({
        checkIn: '',
        checkOut: '',
        guests: 1,
        roomType: 'Single',
    });

    const handleChange = (e, setDetailsFunc) => {
        setDetailsFunc(prevDetails => ({ ...prevDetails, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e, resortName, details) => {
        e.preventDefault();
        // Handle booking submission logic here (e.g., send to server, store in database)
        console.log(`Booking Details for ${resortName}:`, details);
    };

    return (
        <div className="booking-page">
            <nav className="navbar">
                <Link to="/" className="home-link">Home</Link> {/* Link to Home Page */}
            </nav>

            <div className="resort-section">
                {/* Peak Paradise Resort Section */}
                <div className="resort">
                    <h1 className="booking-title">Peak Paradise Resort</h1>
                    <img 
                        src="https://www.dellaresorts.com/new-images/new-camp-della-exterior-v4.jpg" 
                        alt="Peak Paradise Resort" 
                        className="resort-image" 
                    />
                    <p>Experience luxury and comfort at Peak Paradise, a premium resort offering stunning views and top-class amenities.</p>
                    <form onSubmit={(e) => handleSubmit(e, 'Peak Paradise', bookingDetails)} className="booking-form">
                        <label>Check-in Date:</label>
                        <input type="date" name="checkIn" onChange={(e) => handleChange(e, setBookingDetails)} required />

                        <label>Check-out Date:</label>
                        <input type="date" name="checkOut" onChange={(e) => handleChange(e, setBookingDetails)} required />

                        <label>Number of Guests:</label>
                        <input type="number" name="guests" value={bookingDetails.guests} min="1" onChange={(e) => handleChange(e, setBookingDetails)} required />

                        <label>Room Type:</label>
                        <select name="roomType" onChange={(e) => handleChange(e, setBookingDetails)} value={bookingDetails.roomType}>
                            <option value="Single">Single</option>
                            <option value="Double">Double</option>
                            <option value="Family">Family Suite</option>
                        </select>

                        <button type="submit" className="booking-btn">Confirm Booking</button>
                    </form>
                </div>

                {/* Ocean Breeze Resort Section */}
                <div className="resort">
                    <h1 className="booking-title">Ocean Breeze Resort</h1>
                    <img 
                        src="https://r1imghtlak.mmtcdn.com/eec60b34-4ddc-4862-8586-238cd459c678.jpeg" 
                        alt="Ocean Breeze Resort" 
                        className="resort-image" 
                    />
                    <p>Relax at Ocean Breeze, a beachfront resort with serene ocean views and tropical vibes.</p>
                    <form onSubmit={(e) => handleSubmit(e, 'Ocean Breeze', secondBookingDetails)} className="booking-form">
                        <label>Check-in Date:</label>
                        <input type="date" name="checkIn" onChange={(e) => handleChange(e, setSecondBookingDetails)} required />

                        <label>Check-out Date:</label>
                        <input type="date" name="checkOut" onChange={(e) => handleChange(e, setSecondBookingDetails)} required />

                        <label>Number of Guests:</label>
                        <input type="number" name="guests" value={secondBookingDetails.guests} min="1" onChange={(e) => handleChange(e, setSecondBookingDetails)} required />

                        <label>Room Type:</label>
                        <select name="roomType" onChange={(e) => handleChange(e, setSecondBookingDetails)} value={secondBookingDetails.roomType}>
                            <option value="Single">Single</option>
                            <option value="Double">Double</option>
                            <option value="Family">Family Suite</option>
                        </select>

                        <button type="submit" className="booking-btn">Confirm Booking</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BookingPage;
