import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth, signInWithEmailAndPassword, signInWithPopup, provider } from '../firebase';
import Navbar from './Navbar'; // Ensure the Navbar component is correctly imported
import Footer from './Footer'; // Ensure the Footer component is correctly imported
import Sidebar from './Sidebar'; // Ensure the Sidebar component is correctly imported

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error signing in with email and password:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google login result:", result);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <Container>
        <Box>
          <Title>Login</Title>
          <Subtitle>Welcome back! Please enter your credentials to login.</Subtitle>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
          <Button onClick={handleGoogleLogin} backgroundColor="#4285F4">Login with Google</Button>
          <FooterText>Don't have an account? <a href="/signup">Sign up here</a>.</FooterText>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f2f5;
`;

const Box = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
  margin: auto;
  margin-top: 50px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
  color: #333;
`;

const Subtitle = styled.p`
  margin-bottom: 20px;
  color: #666;
  font-size: 16px;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: ${props => props.backgroundColor || '#007bff'};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;

  &:hover {
    background-color: ${props => props.backgroundColor ? '#357ae8' : '#0056b3'};
  }
`;

const FooterText = styled.p`
  margin-top: 20px;
  color: #666;
  font-size: 14px;
`;
