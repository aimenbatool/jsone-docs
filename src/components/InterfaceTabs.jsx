/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core/';
import JavaScript from './interfaceContent/JavaScript';

const TabPanel = (props) => {
  const {
    children,
    value,
    index,
    ...other
  } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
};

TabPanel.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => ({
  id: `vertical-tab-${index}`,
  'aria-controls': `vertical-tabpanel-${index}`,
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#e1e2e5',
    display: 'flex',
    // height: 224,
    textAlign: 'left',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const InterfaceTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Interface tabs"
        className={classes.tabs}
      >
        <Tab label="JavaScript" {...a11yProps(0)} />
        <Tab label="TypeScript" {...a11yProps(1)} />
        <Tab label="Python" {...a11yProps(2)} />
        <Tab label="GoLang" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <JavaScript />
      </TabPanel>
      <TabPanel value={value} index={1}>
        TypeScript
      </TabPanel>
      <TabPanel value={value} index={2}>
        Python
      </TabPanel>
      <TabPanel value={value} index={3}>
        GoLang
      </TabPanel>
    </div>
  );
};

export default InterfaceTabs;
