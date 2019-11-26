import React from 'react';
import { Box } from '@material-ui/core';
import './App.css';
import Intro from './components/Intro';
import Interface from './components/Interface';

const App = () => (
  <Box>
    <Intro />
    <Interface />
  </Box>
);

export default App;
