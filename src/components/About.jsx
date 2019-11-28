import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Typography,
} from '@material-ui/core';
import Banner from '../assets/banner.jpg';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: '#e0e2e5',
    height: '100vh',
  },
  aboutBanner: {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: theme.spacing(0.25),
  },
  aboutHead: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    color: theme.palette.common.white,
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Merriweather, serif',
  },
  aboutContent: {
    marginTop: 20,
    fontFamily: 'Nanum Gothic, sans-serif',
  },
  changes: {
    fontFamily: 'Merriweather, serif',
    marginTop: 20,
    marginBottom: 4,
  },
  link: {
    color: '#1e3652',
    padding: theme.spacing(0.125),
    borderBottom: '1px solid black',
    textDecoration: 'none',
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.aboutBanner}>
        <Container className={classes.aboutHead}>
          <Typography className={classes.title} variant="h2">About</Typography>
        </Container>
      </Box>
      <Container className={classes.aboutContent}>
        <Typography variant="h6">
          JSON-e is a data-structure parameterization system for embedding context in JSON objects.
          <br />
          The central idea is to treat a data structure as a &quot;template&quot; and transform it,
          using another data structure as context, to produce an output data structure.
          <br />
          There are countless libraries to do this with strings, such as
          {' '}
          <a className={classes.link} href="https://mustache.github.io/">mustache</a>
          .
          {' '}
          What makes JSON-e unique is that it operates on data structures, not on their
          textual representation. This allows input to be written in a number of formats
          (JSON, YAML, etc.) or even generated dynamically. It also means that the output
          cannot be &quot;invalid&quot;, even when including large chunks of contextual data.
          <br />
          JSON-e is also designed to be safe for use on untrusted data. It never uses eval
          or any other function that might result in arbitrary code execution. It also disallows
          unbounded iteration, so any JSON-e rendering operation will finish in finite time.
        </Typography>
        <Typography variant="h4" className={classes.changes}>
          Changes
        </Typography>
        <Typography variant="h6">
          See
          {' '}
          <a className={classes.link} href="https://github.com/taskcluster/json-e/blob/master/CHANGELOG.rst">CHANGELOG.rst</a>
          {' '}
          for the changes in each version of this library.
        </Typography>
      </Container>

    </Box>
  );
};

export default About;
