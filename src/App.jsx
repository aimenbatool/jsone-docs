import React from 'react';
import { Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import './App.css';
import NavBar from './components/Navbar';
import Intro from './components/Intro';

const App = () => (
  <Box>
    <CssBaseline />
    <NavBar />
    <Intro />
  </Box>
);

export default App;
