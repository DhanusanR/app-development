// src/components/DashboardPage.js
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar component
import Footer from './Footer'; // Import Footer component

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Navbar /> {/* Add Navbar here */}
      <ContentWrapper>
        <Sidebar>
          <Logo>MyApp</Logo>
          <Nav>
            <NavItem onClick={() => navigate('/dashboard')}>Dashboard</NavItem>
            <NavItem onClick={() => navigate('/profile')}>Profile</NavItem>
            <NavItem onClick={() => navigate('/settings')}>Settings</NavItem>
            <NavItem onClick={() => navigate('/logout')}>Logout</NavItem>
          </Nav>
        </Sidebar>
        <Main>
          <Header>
            <Title>Dashboard</Title>
          </Header>
          <Content>
            <Section>
              <SectionTitle>Overview</SectionTitle>
              <Card>
                <CardTitle>Monthly Revenue</CardTitle>
                <CardValue>₹15,000</CardValue>
              </Card>
              <Card>
                <CardTitle>New Users</CardTitle>
                <CardValue>150</CardValue>
              </Card>
              <Card>
                <CardTitle>Active Users</CardTitle>
                <CardValue>1,200</CardValue>
              </Card>
            </Section>
            <Section>
              <SectionTitle>Recent Activity</SectionTitle>
              <ActivityList>
                <ActivityItem>John Daris signed up.</ActivityItem>
                <ActivityItem>Jane Smith completed a purchase.</ActivityItem>
                <ActivityItem>Mike Johnson logged in.</ActivityItem>
              </ActivityList>
            </Section>
          </Content>
        </Main>
      </ContentWrapper>
      <Footer /> {/* Add Footer here */}
    </Container>
  );
};

export default DashboardPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.div`
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 5px;

  &:hover {
    background-color: #444;
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: #007bff;
  color: white;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const Content = styled.div`
  padding: 20px;
  flex: 1;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const CardTitle = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
`;

const CardValue = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const ActivityList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ActivityItem = styled.li`
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;
