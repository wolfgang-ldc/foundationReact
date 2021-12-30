import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import SummaryClinicalTrial from './SummaryClinicalTrial'
import SummaryEvent from './SummaryEvent'
import SummarySourceReference from './SummarySourceReference'
import SummaryCompany from './SummaryCompany'
import SummaryTherapeuticMolecule from './SummaryTherapeuticMolecule'
import SummaryMolecularTarget from './SummaryMolecularTarget'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  
function Summary(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
                <div className={classes.root}>
                        <AppBar position="static">
                            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                <Tab label="Highlights" {...a11yProps(0)} />
                                <Tab label="Trials" {...a11yProps(1)} />
                                <Tab label="Events"  {...a11yProps(2)} />
                                <Tab label="Literature"  {...a11yProps(3)} />
                                <Tab label="Companies"  {...a11yProps(4)} />
                                <Tab label="Molecules"  {...a11yProps(5)} />
                                <Tab label="Targets"  {...a11yProps(6)} />
                           </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                            <Paper elevation={3}>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: props.Description
                              }} align="left">
                            </div>
                            </Paper>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Paper elevation={3}>
                                <SummaryClinicalTrial DateRangeArray={props.DateRangeArray}/>
                            </Paper>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Paper elevation={3}>
                                <SummaryEvent DateRangeArray2={props.DateRangeArray}/>
                            </Paper>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <Paper elevation={3}>
                                <SummarySourceReference DateRangeArray3={props.DateRangeArray}/>
                            </Paper>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <Paper elevation={3}>
                                <SummaryCompany DateRangeArray4={props.DateRangeArray}/>
                            </Paper>
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            <Paper elevation={3}>
                                <SummaryTherapeuticMolecule DateRangeArray5={props.DateRangeArray}/>
                            </Paper>
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                            <Paper elevation={3}>
                                <SummaryMolecularTarget DateRangeArray6={props.DateRangeArray}/>
                            </Paper>
                        </TabPanel>
                </div>
    )
}

export default Summary;