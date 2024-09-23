import React, { useState } from 'react';
import './Profile.css';

function Profile() {
    const [user, setUser] = useState({
        name: "Raj Singh",
        email: "raj@example.com",
        username: "raj_singh",
        profilePic: "", 
    });

    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(user.name);
    const [newEmail, setNewEmail] = useState(user.email);
    const [newUsername, setNewUsername] = useState(user.username);
    const [newProfilePic, setNewProfilePic] = useState(user.profilePic);

    const defaultPic = "https://via.placeholder.com/150"; 

    const handleEditProfile = () => {
        setIsEditing(true);
    };

    const handleSaveProfile = () => {
        setUser({
            ...user,
            name: newName,
            email: newEmail,
            username: newUsername,
            profilePic: newProfilePic,
        });
        setIsEditing(false);
    };

    const handleProfilePicChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setNewProfilePic(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="profile-container">
            <h1>User Profile</h1>
            <div className="profile-info">
                <img
                    className="profile-pic"
                    src={user.profilePic || defaultPic}
                    alt="Profile"
                />
                <div className="user-details">
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Username: {user.username}</p>
                    <button className="edit-button" onClick={handleEditProfile}>
                        Edit Profile
                    </button>
                    <button className="logout-button">Logout</button>
                </div>
            </div>

            {isEditing && (
                <div className="edit-modal">
                    <div className="modal-content">
                        <h2>Edit Profile</h2>
                        <div className="edit-form">
                            <label>Profile Picture:</label>
                            <input type="file" accept="image/*" onChange={handleProfilePicChange} />
                            <img className="preview-pic" src={newProfilePic || defaultPic} alt="Preview" />

                            <label>Name:</label>
                            <input
                                type="text"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                            />

                            <label>Email:</label>
                            <input
                                type="email"
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                            />

                            <label>Username:</label> 
                            <input
                                type="text"
                                value={newUsername}
                                onChange={(e) => setNewUsername(e.target.value)}
                            />

                            <button className="save-button" onClick={handleSaveProfile}>Save</button>
                            <button className="cancel-button" onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;