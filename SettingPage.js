// src/components/SettingsPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { auth, updateEmail, updatePassword } from '../firebase';

const SettingsPage = () => {
  const [email, setEmail] = useState(auth.currentUser?.email || '');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSave = async () => {
    setError('');
    setSuccess('');
    try {
      // Update email
      if (email !== auth.currentUser?.email) {
        await updateEmail(auth.currentUser, email);
      }

      // Update password
      if (newPassword) {
        await updatePassword(auth.currentUser, newPassword);
      }

      setSuccess('Settings updated successfully!');
    } catch (error) {
      setError('Error updating settings: ' + error.message);
    }
  };

  return (
    <Container>
      <Header>
        <Title>Settings</Title>
      </Header>
      <Content>
        <Form>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your new email"
          />
          <Label>New Password</Label>
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter a new password"
          />
          <Button onClick={handleSave}>Save Changes</Button>
          {error && <Message error>{error}</Message>}
          {success && <Message success>{success}</Message>}
        </Form>
      </Content>
    </Container>
  );
};

export default SettingsPage;

const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 28px;
`;

const Content = styled.div`
  padding: 80px 20px 20px; /* Adjusted for fixed header */
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  color: #333;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: ${(props) => (props.error ? '#e74c3c' : '#2ecc71')};
`;
