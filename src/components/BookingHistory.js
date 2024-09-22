import React from 'react';
import './BookingHistory.css';

const BookingHistory = ({ history = [] }) => {
  return (
    <div className="booking-history">
      <h2>Your Booking History</h2>
      {history.length > 0 ? (
        <ul>
          {history.map((booking, index) => (
            <li key={index} className="booking-item">
              <h3>{booking.title}</h3>
              <p>Tickets Booked: {booking.tickets}</p>
              <p>Date: {booking.bookedDate}</p>
              <p>Time: {booking.bookedTime}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-bookings">
          <p>No bookings made yet.</p>
        </div>
      )}
    </div>
  );
};

export default BookingHistory;
