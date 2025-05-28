import React from 'react';

const ProfileDetails = ({ profile, onBack }) => (
  <div className="profile-details">
    <button onClick={onBack}>Back</button>
    <img src={profile.photo} alt={profile.name} />
    <h2>{profile.name}</h2>
    <p><strong>Description:</strong> {profile.description}</p>
    <p><strong>Address:</strong> {profile.address}</p>
    <p><strong>Contact:</strong> {profile.contact}</p>
    <p><strong>Interests:</strong> {profile.interests?.join(', ')}</p>
  </div>
);

export default ProfileDetails;