import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const Confirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the home page after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ marginTop: '20px', marginLeft: '240px' }}>
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Payment Confirmation
          </Typography>
          <Typography variant="h6" component="p">
            Thank you for your payment. Your transaction has been successfully processed.
          </Typography>
          <Typography variant="body1" component="p" sx={{ marginTop: '20px' }}>
            You will be redirected to the home page shortly.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Confirmation;
