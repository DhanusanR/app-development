// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import LoginPage from './components/LoginPage';
import Signup from './components/Signup';
import Overview from './components/Overview';
import TeamPage from './components/Teampage';
import BusinessLines from './components/BusinessLines';
import RequestPower from './components/RequestPower';

import './App.css';
import BlogPage from './components/BlogPage';
import NewsPage from './components/NewsPage';
import CareerPage from './components/CareerPage';
import { Dashboard } from '@mui/icons-material';
import DashboardPage from './components/DashboardPage';
import ProfilePage from './components/ProfilePage';
import SettingsPage from './components/SettingPage';
import SupplierPage from './components/SupplierPage';
import Partner from './components/Partner';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import BecomeASupplier from './components/BecomeASupplier';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/business-lines" element={<BusinessLines />} />
          <Route path="/request-power" element={<RequestPower />} />
         
          <Route path="/publications" element={<BlogPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/supplier" element={<SupplierPage/>} /> 
        <Route path="/Partner" element={<Partner/>} /> 
        <Route path="/payment" element={<Payment />} />  
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/become-a-supplier" element={<BecomeASupplier />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
