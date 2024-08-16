// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background: url('/path/to/your/image.jpg') no-repeat center center;
  background-size: cover;
  color: white;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <h1>Welcome to SolShare</h1>
      <p>Sharing solar energy with the world.</p>
    </HeroContainer>
  );
};

export default Hero;
