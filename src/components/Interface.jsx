import React from 'react';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InterfaceTabs from './InterfaceTabs';

const useStyles = makeStyles((theme) => ({
  interfaceWrapper: {
    backgroundColor: '#e0e2e5',
  },
  interface: {
    padding: theme.spacing(0.25),
    fontFamily: 'Merriweather, serif',
    textAlign: 'center',
    color: '#1c354b',
  },
}));

const Interface = () => {
  const classes = useStyles();

  return (
    <Box className={classes.interfaceWrapper} id="interface">
      <Container className={classes.interface}>
        <h1> Interface </h1>
        <InterfaceTabs />
      </Container>
    </Box>
  );
};

export default Interface;
