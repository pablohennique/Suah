import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
      <Heading>Home Page</Heading>
      <Text>Welcome to the home page!</Text>
    </Box>
  );
};

export default HomePage;