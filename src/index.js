import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />{' '}
  </StrictMode>
);
