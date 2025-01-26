import { Outlet } from 'react-router-dom';
import { Box, Flex, Heading } from '@chakra-ui/react';

const AuthLayout = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bg="gray.50"
    >
      <Box
        w="full"
        maxW="md"
        p={6}
        borderRadius="md"
        boxShadow="lg"
        bg="white"
      >
        <Heading as="h1" mb={4} size="lg" textAlign="center">
          Welcome!
        </Heading>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default AuthLayout;