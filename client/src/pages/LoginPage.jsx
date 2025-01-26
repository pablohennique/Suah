import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  VStack,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login with:', { email, password });
    // Call your API service here
  };

  return (
    <Box
      maxW="sm"
      mx="auto"
      mt={8}
      p={6}
      borderWidth={1}
      borderRadius="md"
      boxShadow="lg"
    >
      <Heading mb={6} size="lg" textAlign="center">
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button type="submit" colorScheme="blue" w="full">
            Login
          </Button>

          <Text fontSize="sm">
            Don’t have an account?{' '}
            <Link href="/register" color="blue.500">
              Register
            </Link>
          </Text>
        </VStack>
      </form>
    </Box>
  );
};

export default LoginPage;