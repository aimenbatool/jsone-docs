import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
  },
  appBar: {
    boxShadow: 'none',
    color: '#293d4a',
    backgroundColor: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
              JSONE
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Interfaces</Button>
          <Button color="inherit">Playground</Button>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
