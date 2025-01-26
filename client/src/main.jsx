import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

createRoot(root).render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
