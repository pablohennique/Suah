import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between" align="center">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold">
          Home
        </Link>
        <Link as={RouterLink} to="/about" color="white" fontWeight="bold">
          About
        </Link>
        <Link as={RouterLink} to="/contact" color="white" fontWeight="bold">
          Contact
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;