import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import Navbar from './Navbar'; // Ensure Navbar component is correctly imported
import Footer from './Footer'; // Ensure Footer component is correctly imported
import Sidebar from './Sidebar'; // Ensure Sidebar component is correctly imported
import './BusinessLines.css';

// Fix the default marker icon issue in Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const BusinessLines = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [nearestLocation, setNearestLocation] = useState(null);
  const [notification, setNotification] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const currentPos = [latitude, longitude];
        setCurrentPosition(currentPos);

        // Calculate nearest grid location
        findNearestGrid(currentPos);
      },
      (error) => {
        console.error("Error getting the current position:", error);
      }
    );
  }, []);

  const locationsCoimbatore = [
    { lat: 11.0146, lon: 76.9885, name: 'Panel Paramesh' },
    { lat: 11.0137, lon: 76.9892, name: 'Panel Jagan' },
    { lat: 11.0160, lon: 76.9875, name: 'Panel John' },
    { lat: 11.0153, lon: 76.9905, name: 'Panel Maniki' },
    { lat: 11.0170, lon: 76.9898, name: 'Panel Addhu' },
    { lat: 11.0141, lon: 76.9912, name: 'Panel Dhanus' },
    { lat: 11.0129, lon: 76.9889, name: 'Panel Depak' },
    { lat: 11.0163, lon: 76.9900, name: 'Location 8' },
    { lat: 11.0150, lon: 76.9880, name: 'Location 9' },
    { lat: 11.0135, lon: 76.9872, name: 'Grid Coimbatore' },
  ];

  const locationsErode = [
    { lat: 11.6833, lon: 77.7167, name: 'Panel A' },
    { lat: 11.6844, lon: 77.7175, name: 'Panel B' },
    { lat: 11.6825, lon: 77.7180, name: 'Panel C' },
    { lat: 11.6816, lon: 77.7155, name: 'Panel D' },
    { lat: 11.6850, lon: 77.7162, name: 'Panel E' },
    { lat: 11.6860, lon: 77.7178, name: 'Panel F' },
    { lat: 11.6870, lon: 77.7188, name: 'Panel G' },
    { lat: 11.6880, lon: 77.7195, name: 'Panel H' },
    { lat: 11.6890, lon: 77.7202, name: 'Panel I' },
    { lat: 11.6900, lon: 77.7210, name: 'Panel J' },
  ];

  const polylinePositionsCoimbatore = locationsCoimbatore.map(location => [location.lat, location.lon]);
  const polylinePositionsErode = locationsErode.map(location => [location.lat, location.lon]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  const findNearestGrid = (position) => {
    const [lat, lon] = position;
    let nearest = null;
    let minDistance = Infinity;

    [...locationsCoimbatore, ...locationsErode].forEach(location => {
      const distance = calculateDistance(lat, lon, location.lat, location.lon);
      if (distance < minDistance) {
        minDistance = distance;
        nearest = location;
      }
    });

    setNearestLocation(nearest);
    setNotification(`Current Location: [${lat.toFixed(4)}, ${lon.toFixed(4)}]. Nearest grid: ${nearest.name}`);
  };

  const handleRequestPower = () => {
    window.location.href = '/request-power';
  };

  return (
    <div className="business-lines">
      <Navbar />
      <Sidebar />
      <Content>
        <h1>Business Lines</h1>
        <div className="business-ideas">
          <h2>Our Innovative Solutions</h2>
          <p>We provide cutting-edge energy solutions to transform the way communities power their lives. Discover our revolutionary approach to sustainable energy.</p>
        </div>
        <MapCard>
          <MapContainer center={[11.0146, 76.9895]} zoom={15} style={{ height: '500px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {currentPosition && (
              <Marker position={currentPosition}>
                <Popup>
                  This is your current location.<br />
                  {nearestLocation && `Nearest grid: ${nearestLocation.name}`}
                </Popup>
              </Marker>
            )}
            {locationsCoimbatore.map((location, index) => (
              <Marker key={`coimbatore-${index}`} position={[location.lat, location.lon]}>
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
            <Polyline positions={polylinePositionsCoimbatore} color="blue" />
            {locationsErode.map((location, index) => (
              <Marker key={`erode-${index}`} position={[location.lat, location.lon]}>
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
            <Polyline positions={polylinePositionsErode} color="green" />
          </MapContainer>
        </MapCard>
        {loading && <p>Loading...</p>}
        {notification && <Notification>{notification}</Notification>}
        <RequestButton onClick={handleRequestPower}>Request Power</RequestButton>
        <ExtraInfo>
          <h2>Why Choose Our Solutions?</h2>
          <ul>
            <ListItem>Efficient and sustainable energy solutions tailored to your needs.</ListItem>
            <ListItem>Seamless integration with existing infrastructure.</ListItem>
            <ListItem>24/7 support and monitoring to ensure reliable power supply.</ListItem>
            <ListItem>Competitive pricing with flexible payment options.</ListItem>
          </ul>
        </ExtraInfo>
      </Content>
      <Footer />
    </div>
  );
};

export default BusinessLines;

const Content = styled.div`
  margin-left: 240px; /* Sidebar width */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MapCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  padding: 20px;
  width: 80%; /* Make the card narrower */
  max-width: 1000px; /* Limit the maximum width */
`;

const Notification = styled.div`
  background-color: #dff0d8;
  color: #3c763d;
  padding: 15px;
  border-radius: 5px;
  margin: 20px 0;
  text-align: center; /* Center the text */
  width: 80%; /* Make the notification width same as MapCard */
  max-width: 1000px; /* Limit the maximum width */
`;

const RequestButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ExtraInfo = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  width: 80%; /* Match the width of MapCard */
  max-width: 1000px; /* Limit the maximum width */
  text-align: left; /* Align text to the left */
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;
