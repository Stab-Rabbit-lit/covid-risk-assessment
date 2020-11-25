import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  ChakraProvider,
} from "@chakra-ui/react";

import App from './App.jsx';

render(
  <BrowserRouter>
  <ChakraProvider>
    <App />
  </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
