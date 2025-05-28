import React, { useState, useEffect } from 'react';
import ProfileCard from './components/ProfileCard';
import ProfileDetails from './components/ProfileDetails';
import MapComponent from './components/MapComponent';
import AdminPanel from './components/AdminPanel';
import './App.css';

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Load sample profiles
    setProfiles([
      { name: 'Alice', photo: 'https://via.placeholder.com/150', description: 'Designer', address: 'New York', contact: 'alice@example.com', interests: ['Art', 'Design'] },
      { name: 'Bob', photo: 'https://via.placeholder.com/150', description: 'Developer', address: 'San Francisco', contact: 'bob@example.com', interests: ['Coding', 'Music'] }
    ]);
  }, []);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
    setShowMap(true);
    setShowDetails(false);
  };

  const handleViewDetails = (profile) => {
    setSelectedProfile(profile);
    setShowDetails(true);
    setShowMap(false);
  };

  const handleProfileChange = (newProfiles) => {
    setProfiles(newProfiles);
  };

  return (
    <div className="App">
      <h1>Profile Viewer</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {showDetails && selectedProfile ? (
        <ProfileDetails profile={selectedProfile} onBack={() => setShowDetails(false)} />
      ) : (
        <div className="profile-list">
          {profiles
            .filter((p) =>
              p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              p.address.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((profile, i) => (
              <ProfileCard
                key={i}
                profile={profile}
                onSummaryClick={handleSummaryClick}
                onViewDetails={handleViewDetails}
              />
            ))}
        </div>
      )}
      {showMap && selectedProfile && (
        <MapComponent address={selectedProfile.address} />
      )}
      <AdminPanel profiles={profiles} setProfiles={handleProfileChange} />
    </div>
  );
};

export default App;
