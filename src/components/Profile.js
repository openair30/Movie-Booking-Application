import React from 'react';
import './Profile.css';

function Profile() {
    const user = {
        name: "Raj Singh",
        email: "raj@example.com",
        username: "raj_singh",
        bookings: [
            { id: 1, movie: "Movie Title 1", date: "2024-09-25", time: "19:00", status: "Upcoming" },
            { id: 2, movie: "Movie Title 2", date: "2024-09-20", time: "21:00", status: "Past" },
        ],
    };

    return (
        <div className="profile-container">
            <h1>User Profile</h1>
            <div className="profile-info">
                <img className="profile-pic" src="path_to_profile_pic.jpg" alt="Profile" />
                <div className="user-details">
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Username: {user.username}</p>
                    <button className="edit-button">Edit Profile</button>
                    <button className="logout-button">Logout</button>
                </div>
            </div>

            <h2>Booking History</h2>
            <table className="booking-table">
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {user.bookings.map(booking => (
                        <tr key={booking.id}>
                            <td>{booking.movie}</td>
                            <td>{booking.date}</td>
                            <td>{booking.time}</td>
                            <td>{booking.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Profile;
