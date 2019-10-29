import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Button } from '@material-ui/core';
import IntroBanner from '../assets/intro2.jpg';

const useStyles = makeStyles(() => ({
  introWrapper: {
    backgroundImage: `url(${IntroBanner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: 500,
    padding: 2,
  },
  intro: {
    marginTop: 120,
    fontFamily: 'Merriweather, serif',
    color: 'white',
    textAlign: 'center',
  },
  title: {
    fontSize: 56,
  },
  description: {
    fontFamily: 'Nanum Gothic, sans-serif',
  },
  learnMoreButton: {
    marginTop: 12,
    color: 'white',
    padding: '14px 44px',
    border: '1px white solid',
    fontSize: 16,
    '&:hover': {
      backgroundColor: '#ece9e9',
      color: '#1a364a',
      border: '1px white solid',
    },
  },
}));

const Intro = () => {
  const classes = useStyles();

  return (
    <Box className={classes.introWrapper}>
      <Container className={classes.intro}>
        <h1 className={classes.title}>JSON-e V3.0.1</h1>
        <h2 className={classes.description}>
          A data-structure parameterization system for embedding context in JSON objects
        </h2>
        <Button className={classes.learnMoreButton}>Learn More</Button>
      </Container>
    </Box>
  );
};

export default Intro;
