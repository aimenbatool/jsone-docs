import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  intro: {
    backgroundImage: 'url(../../../intro.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: 500,
    margin: 0,
    padding: 0,
  },
}));

const Intro = () => {
  const classes = useStyles();

  return (
    <Box className={classes.intro}>
    askdjkasd
    </Box>
  );
};

export default Intro;
