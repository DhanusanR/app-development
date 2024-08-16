import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { addPayment } from '../firebase'; // Import the function to add a payment record
import useAuth from '../hooks/useAuth'; // Import the custom hook

const Payment = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
    amount: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { user, loading } = useAuth(); // Use the custom hook to get user data

  useEffect(() => {
    if (!loading && !user) {
      // If not loading and no user is authenticated, redirect to login page
      navigate('/login');
    }
  }, [loading, user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    const cardNumberRegex = /^[0-9]{16}$/;
    const cvvRegex = /^[0-9]{3,4}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

    if (!cardNumberRegex.test(formData.cardNumber)) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    if (!formData.cardHolderName.trim()) {
      newErrors.cardHolderName = 'Cardholder name is required';
    }
    if (!expiryDateRegex.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Expiry date must be in MM/YY format';
    }
    if (!cvvRegex.test(formData.cvv)) {
      newErrors.cvv = 'CVV must be 3 or 4 digits';
    }
    if (!formData.amount || formData.amount <= 0) {
      newErrors.amount = 'Amount must be a positive number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    try {
      await addPayment(formData);
      toast.success('Payment successful! Redirecting to confirmation page...');
      setTimeout(() => {
        navigate('/confirmation');
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error processing payment. Please try again.');
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state while checking auth
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <Container maxWidth="sm" sx={{ marginLeft: '240px', marginTop: '20px' }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Payment
          </Typography>
          <TextField
            label="Card Number"
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            error={!!errors.cardNumber}
            helperText={errors.cardNumber}
            required
            fullWidth
          />
          <TextField
            label="Card Holder Name"
            type="text"
            id="cardHolderName"
            name="cardHolderName"
            value={formData.cardHolderName}
            onChange={handleChange}
            error={!!errors.cardHolderName}
            helperText={errors.cardHolderName}
            required
            fullWidth
          />
          <TextField
            label="Expiry Date (MM/YY)"
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            error={!!errors.expiryDate}
            helperText={errors.expiryDate}
            required
            fullWidth
          />
          <TextField
            label="CVV"
            type="password"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            error={!!errors.cvv}
            helperText={errors.cvv}
            required
            fullWidth
          />
          <TextField
            label="Amount"
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            error={!!errors.amount}
            helperText={errors.amount}
            required
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Pay Now
          </Button>
        </Box>
      </Container>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Payment;
