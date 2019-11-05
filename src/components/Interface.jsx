import React from 'react';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  interfaceWrapper: {
    backgroundColor: '#e0e2e5',
    minHeight: theme.spacing(62),
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
    <Box className={classes.interfaceWrapper}>
      <Container className={classes.interface}>
        <h1> Interface </h1>
      </Container>
    </Box>
  );
};

export default Interface;
