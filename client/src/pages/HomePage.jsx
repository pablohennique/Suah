import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
      <Heading>Suah Ticketing</Heading>
      <Text>Welcome to the night life ticketing app!</Text>
    </Box>
  );
};

export default HomePage;