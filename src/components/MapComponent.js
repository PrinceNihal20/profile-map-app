import React, { useEffect, useState } from 'react';

const MapComponent = ({ address }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const success = Math.random() > 0.1;
      if (success) setMapLoaded(true);
      else setLoadError(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [address]);

  if (loadError) return <div style={{ color: 'red' }}>❌ Failed to load map for {address}</div>;
  if (!mapLoaded) return <div>Loading map for {address}...</div>;

  return <div style={{ border: '2px solid green', padding: '10px' }}>📍 Map for <strong>{address}</strong></div>;
};

export default MapComponent;