// src/components/BecomeASupplier.js
import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import Navbar from './Navbar'; // Ensure you have Navbar component
import Footer from './Footer'; // Ensure you have Footer component

const BecomeASupplier = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: '20px', marginLeft: '240px' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Become a Supplier
          </Typography>
          <Typography variant="h6" component="p">
            We are always looking for reliable suppliers to join our network. If you're interested in becoming a supplier, please fill out the form below.
          </Typography>
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            label="Company Name"
            name="companyName"
            required
            fullWidth
          />
          <TextField
            label="Contact Person"
            name="contactPerson"
            required
            fullWidth
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            required
            fullWidth
          />
          <TextField
            label="Phone Number"
            type="tel"
            name="phoneNumber"
            required
            fullWidth
          />
          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default BecomeASupplier;
