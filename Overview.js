import React from 'react';
import { Box, Image, Text, Heading, VStack, HStack, Container } from '@chakra-ui/react';
import Navbar from './Navbar'; // Import Navbar component
import Footer from './Footer'; // Import Footer component
import './Overview.css';
import Sidebar from './Sidebar';

const Overview = () => {
  return (
    <div>
      <Navbar /> {/* Add Navbar here */}
      <Sidebar /> {/* Add Sidebar here */}

      <Container maxW="container.lg" py={10} className="container">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center" className="text-center">
            <Heading as="h1" size="2xl" className="heading">Decentralized Solar Grid</Heading>
            <Text fontSize="xl" mt={4} className="subheading">
              Providing Vulnerable Communities with Access to Reliable Solar Energy Solutions
            </Text>
          </Box>
          <Box>
            <Image
              src="https://www.researchgate.net/publication/343688370/figure/fig6/AS:1093003208859666@1637603680493/A-representation-of-the-energy-communities-with-Blockchain.png"
              alt="Decentralized Solar Grid"
              borderRadius="lg"
              className="image"
            />
          </Box>
          <Box>
            <Heading as="h2" size="xl" mb={4} className="section-heading">Project Overview</Heading>
            <Text fontSize="md" lineHeight="tall" className="section-text">
              Our decentralized solar grid project leverages the latest in renewable energy technology to provide reliable and sustainable energy solutions to communities. By utilizing blockchain technology, we ensure transparent and secure energy transactions, while AI and ML optimize energy distribution and usage.
            </Text>
          </Box>
          <HStack spacing={8} align="stretch">
            <Box flex={1} className="feature-box">
              <Heading as="h3" size="lg" mb={4} className="feature-heading">AI and ML Integration</Heading>
              <Text fontSize="md" lineHeight="tall" className="feature-text">
                AI and ML algorithms optimize energy distribution based on real-time data, ensuring efficient energy use and minimizing waste. Predictive analytics help in maintaining the grid and foresee energy demands.
              </Text>
            </Box>
            <Box flex={1} className="feature-box">
              <Heading as="h3" size="lg" mb={4} className="feature-heading">Blockchain for Secure Transactions</Heading>
              <Text fontSize="md" lineHeight="tall" className="feature-text">
                Blockchain technology ensures all energy transactions are secure, transparent, and tamper-proof. This decentralized approach promotes trust and reliability among users.
              </Text>
            </Box>
          </HStack>
          <Box>
            <Heading as="h3" size="lg" mb={4} className="section-heading">Key Features</Heading>
            <Text fontSize="md" lineHeight="tall" className="section-text">
              - Optimized energy distribution with AI and ML.<br />
              - Secure and transparent transactions using blockchain.<br />
              - Scalable and adaptable to various community sizes.<br />
              - Promotes sustainable and renewable energy usage.<br />
              - User-friendly interface for easy energy management.
            </Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={4} className="section-heading">Impact and Future Plans</Heading>
            <Text fontSize="md" lineHeight="tall" className="section-text">
              Our decentralized solar grid has empowered numerous communities by providing access to clean energy. Moving forward, we aim to expand our reach, incorporate more advanced features, and continue improving energy accessibility and sustainability.
            </Text>
          </Box>
        </VStack>
      </Container>
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default Overview;
