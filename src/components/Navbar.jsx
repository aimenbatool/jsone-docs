import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: 'none',
    color: '#293d4a',
    backgroundColor: theme.palette.common.white,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    borderRadius: 4,
    color: '#283d4a',
    padding: 8,
    '&:hover': {
      backgroundColor: '#e0e0e0a6',
    },
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
          <Link className={classes.navLink} to="/">Home</Link>
          <NavLink smooth className={classes.navLink} to="/#interface">Interface</NavLink>
          <Link className={classes.navLink} to="/about">About</Link>
          <Link className={classes.navLink} to="/playground">Playground</Link>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
