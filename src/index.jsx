import React from 'react';
import { render } from 'react-dom';
import { Box } from '@material-ui/core';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import NavBar from './components/Navbar';
import App from './App';
import About from './components/About';

const root = document.getElementById('root');
const load = () => render(
  (
    <Router>
      <AppContainer>
        <Box>
          <CssBaseline />
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <App />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Box>
      </AppContainer>
    </Router>
  ), root,
);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', load);
}

load();
