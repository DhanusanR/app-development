// src/components/RequestPower.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import toast for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast
import Navbar from './Navbar'; // Ensure you have Navbar component
import Footer from './Footer'; // Ensure you have Footer component
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { addPowerRequest } from '../firebase'; // Import the function
import './RequestPower.css';

// Function to calculate rent based on power needed
const calculateRent = (power) => {
  // Example calculation: 5 rupees per kWh
  return power * 5;
};

const RequestPower = () => {
  const [formData, setFormData] = useState({
    powerNeeded: '',
    location: '',
    phoneNumber: '',
    timeFrame: '',
  });
  const [rentPrice, setRentPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Update rent price whenever powerNeeded changes
    if (formData.powerNeeded) {
      setRentPrice(calculateRent(Number(formData.powerNeeded)));
    }
  }, [formData.powerNeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addPowerRequest({ ...formData, rentPrice });
      toast.success('Your request has been submitted and will be processed soon! Redirecting to payment page...');
      setTimeout(() => {
        navigate('/payment');
      }, 2000); // Adjust the delay as needed
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error submitting form. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" className="request-power-container">
        <Box
          component="form"
          className="request-power-form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Request Power to your house with ease
          </Typography>
          <TextField
            label="Minimum Power Needed (in kWh)"
            type="number"
            id="powerNeeded"
            name="powerNeeded"
            value={formData.powerNeeded}
            onChange={handleChange}
            required
            fullWidth
          />
         
          <TextField
            label="Phone Number"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Time Frame (in mins)"
            type="text"
            id="timeFrame"
            name="timeFrame"
            value={formData.timeFrame}
            onChange={handleChange}
            required
            fullWidth
          />
          <Typography variant="h6" component="p">
            Rent Price: ₹{rentPrice.toFixed(2)}
          </Typography>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Container>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default RequestPower;
