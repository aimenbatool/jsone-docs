import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Typography,
} from '@material-ui/core';
import Banner from '../assets/banner.jpg';

const useStyles = makeStyles((theme) => ({
  aboutWrapper: {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: theme.spacing(0.25),
  },
  about: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    color: theme.palette.common.white,
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Merriweather, serif',
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Box className={classes.aboutWrapper}>
      <Container className={classes.about}>
        <Typography className={classes.title} variant="h2">About</Typography>
      </Container>
    </Box>
  );
};

export default About;
