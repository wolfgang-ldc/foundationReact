import React from 'react'
import {Link} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';


import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';


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
    display: 'flex',

    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    container: {
        maxHeight: 300,
      },
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
  ,
}));

const CompanyClassDetailView = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <React.Fragment className={classes.root}>
    <CssBaseline />
    <Container maxWidth="lg">
    <AppBar position="static">
        <Typography variant="h6" className={classes.title}>
            Company Class Details
        </Typography>
    </AppBar>
    <h1>
      {props.HomePage === "" ? "" : <a href={props.HomePage} target="_blank" rel="noopener noreferrer">{props.Name}</a>} 
    </h1>
    <Grid container spacing={2}>
      <Grid item xs={4}>
    <Paper elevation={3} className={classes.paper}>
        <TextField
          id="standard-multiline-flexible"
          label="ID"
          multiline
          rowsMax={1}
          fullWidth="true"
          value={props.FID}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Therapeutic Molecule Name"
          multiline
          rowsMax={1}
          fullWidth="true"
          value={props.Name}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Therapeutic Molecule Synonyms"
          multiline
          rowsMax={3}
          fullWidth="true"
          value={props.AlternateNames}
        />
        </Paper>
        </Grid>
        <Grid item xs={8}>
        <Paper className={classes.paper}>
        <TextField
          id="standard-multiline-flexible"
          label="Description"
          multiline
          fullWidth="true"
          size="small"
          value={props.Description}
        />
    </Paper>
    </Grid>
    </Grid>

      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Events"  {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Paper elevation={3}>
            <TableContainer component={Paper} className={classes.container}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead stickyHeader aria-label="sticky table">
                        <TableRow>
                            <TableCell align="left">FID</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">ScoreCard</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.Companies.map(row => (
                        <TableRow key={row.FID}>
                            <TableCell component="th" scope="row">
                                {row.FID_S}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Link to={`/companysummary/${row.FID_S}`} >{row.Name}</Link>
                            </TableCell>
                            <TableCell align="left">{row.FinanceStatus}</TableCell>
                            <TableCell align="left">{row.Description}</TableCell>
                            <TableCell align="left">
                                <TableBody>
                                {row.ScoreCards.map(r => (
                                    <TableRow key={r.CreationDate}>
                                        <TableCell component="th" scope="row">
                                            {r.CreationDate}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {r.OverallScore}
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
      </TabPanel>
    </Container>
  </React.Fragment>
  )
}

export default  CompanyClassDetailView;