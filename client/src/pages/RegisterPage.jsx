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
import { serviceClient } from '../services';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register with:', { name, email, password });
    // Call your API service here
    serviceClient._userService.register({ email, password})
      .then((res) => {
        console.log('Login response:', res);
      });
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
        Register
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

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

          <Button type="submit" colorScheme="green" w="full">
            Register
          </Button>

          <Text fontSize="sm">
            Already have an account?{' '}
            <Link href="/login" color="blue.500">
              Login
            </Link>
          </Text>
        </VStack>
      </form>
    </Box>
  );
};

export default RegisterPage;