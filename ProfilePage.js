// src/components/ProfilePage.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { auth } from '../firebase';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      setEmail(currentUser.email);
      setUsername(currentUser.displayName || '');
      // You might also want to fetch additional user info from a database here
    }
  }, []);

  const handleSave = () => {
    // Save profile changes logic here
    console.log('Saving profile:', { username, email });
  };

  return (
    <Container>
      <Header>
        <Title>Profile Page</Title>
      </Header>
      <Content>
        {user && (
          <>
            <ProfileSection>
              <ProfilePic src={user.photoURL || 'https://via.placeholder.com/150'} alt="Profile" />
              <ProfileDetails>
                <ProfileName>{username || 'User Name'}</ProfileName>
                <ProfileEmail>{email}</ProfileEmail>
              </ProfileDetails>
            </ProfileSection>
            <Form>
              <Label>Username</Label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
              <Label>Email</Label>
              <Input
                type="email"
                value={email}
                readOnly
                placeholder="Your email"
              />
              <Button onClick={handleSave}>Save Changes</Button>
            </Form>
          </>
        )}
      </Content>
    </Container>
  );
};

export default ProfilePage;

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
  max-width: 800px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
`;

const ProfilePic = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
  border: 3px solid #007bff;
`;

const ProfileDetails = styled.div`
  flex: 1;
`;

const ProfileName = styled.h2`
  font-size: 24px;
  margin: 0;
  color: #333;
`;

const ProfileEmail = styled.p`
  font-size: 16px;
  color: #666;
  margin: 5px 0 0;
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
  margin-bottom: 5px;
  color: #333;
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
