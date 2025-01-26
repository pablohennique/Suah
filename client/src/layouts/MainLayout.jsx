import { Box, Stack } from "@chakra-ui/react";
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <Stack minH={"100vh"} alignItems="center" justifyContent="space-between">
      <Box w={'100%'}>
        <Header />
      </Box>
			<Box mt={30} w={'100%'}>
        <Outlet />
      </Box>
      <Box w={'100%'}>
        <Footer />
      </Box>
    </Stack>
  );
};

export default MainLayout;