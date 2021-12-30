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

import SimilarMoleculeList from './SimilarMoleculeList'

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

const TherapeuticMoleculeDetailView = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    //Extract multiple values into a comma-separated list to display in a single field
    var CompanyList = "";
    props.Companies.map(r => (
      CompanyList = CompanyList + r.Name + ","
    ))
    var MolecularTargetList = "";
    props.MolecularTargets.map(r => (
      MolecularTargetList = MolecularTargetList + r.Name + ","
    ))

  return (
    <React.Fragment className={classes.root}>
    <CssBaseline />
    <Container maxWidth="lg">
    <AppBar position="static">
        <Typography variant="h6" className={classes.title}>
            Therapeutic Molecule Details
        </Typography>
    </AppBar>
    <h1>
      {props.HomePage === "" ? "" : <a href={props.HomePage} target="_blank" rel="noopener noreferrer">{props.Name}</a>} 
    </h1>
    <h3>
      {props.CompanyHomePage === "" ? "" : <Link to={`/companysummary/${props.CompanyFID_S}`} >{props.CompanyName}</Link>} 
    </h3>
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
        <TextField
          id="standard-multiline-flexible"
          label="Company Name"
          multiline
          rowsMax={1}
          fullWidth="true"
          value={CompanyList}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Highest Development Stage"
          multiline
          fullWidth="true"
          size="small"
          value={props.Stage}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Modality"
          multiline
          fullWidth="true"
          size="small"
          value={props.Modality}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Molecular Target Name"
          multiline
          rowsMax={1}
          fullWidth="true"
          value={MolecularTargetList}
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
          <Tab label="Molecular Targets"  {...a11yProps(1)} />
          <Tab label="Clinical Trials" {...a11yProps(2)} />
          <Tab label="Similar Molecules by Target" {...a11yProps(3)} />
          <Tab label="Therapeutic Product" {...a11yProps(4)} />
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
                            <TableCell align="left">EventType</TableCell>
                            <TableCell align="left">EventOutcome</TableCell>
                            <TableCell align="left">EventDate</TableCell>
                            <TableCell align="left">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.Events.map(row => (
                        <TableRow key={row.FID}>
                            <TableCell component="th" scope="row">
                                {row.FID_S}
                            </TableCell>
                            <TableCell component="th" scope="row">{row.Name}</TableCell>
                            <TableCell align="left">
                                <TableBody>
                                {row.EventTypes.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                          {r.Name}
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </TableCell>
                            <TableCell align="left">
                                <TableBody>
                                {row.EventOutcomes.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row" >
                                            <b>{r.Name}</b>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </TableCell>
                            <TableCell align="left">{row.EventDate}</TableCell>
                            <TableCell align="left">{row.Description}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Paper elevation={3}>
            <TableContainer component={Paper} className={classes.container}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead stickyHeader aria-label="sticky table">
                        <TableRow>
                            <TableCell align="left">FID</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">AlternateName</TableCell>
                            <TableCell align="left">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.MolecularTargets.map(row => (
                        <TableRow key={row.FID}>
                            <TableCell component="th" scope="row">
                                {row.FID}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Link to={`/moleculartargetdetail/${row.FID_S}`} >{row.Name}</Link>
                            </TableCell>
                            <TableCell align="left">{row.AlternateNames}</TableCell>
                            <TableCell align="left">{row.Description}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Paper elevation={3}>
            <TableContainer component={Paper} className={classes.container}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead stickyHeader aria-label="sticky table">
                        <TableRow>
                            <TableCell align="left">Bloom</TableCell>
                            <TableCell align="left">Weblink</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Acronym</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">Recruitment</TableCell>
                            <TableCell align="left">Enrollment</TableCell>
                            <TableCell align="left">Company</TableCell>
                            <TableCell align="left">Stage</TableCell>
                            <TableCell align="left">Disease</TableCell>
                            <TableCell align="left">Molecule</TableCell>
                            <TableCell align="left">FirstPostedDate</TableCell>
                            <TableCell align="left">Events</TableCell>
                            <TableCell align="left">Predictions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.ClinicalTrials.map(row => (
                        <TableRow key={row.Name}>
                          <TableCell component="th" scope="row">
                            <a href={"neo4j://graphapps/neo4j-bloom/?search=" + row.Name + "&perspective=FoundationBiology"} target="_blank" rel="noopener noreferrer">
                            <img alt="No Logo available" height="25" width="25" className="image" src="http://localhost/images/bloom"/>
                            </a>
                          </TableCell>
                          <TableCell>
                            <a href={"https://clinicaltrials.gov/ct2/results?cond=&term=" + row.Name + "&cntry=&state=&city=&dist="} target="_blank" rel="noopener noreferrer">
                            <img alt="No Logo available" height="25" width="25" className="image" src="http://localhost/images/weblink"/>
                            </a>
                          </TableCell>
                            <TableCell component="th" scope="row">
                              <Link to={`/clinicaltrialdetail/${row.FID_S}`} >{row.Name}</Link>
                            </TableCell>
                            <TableCell align="left">{row.Acronym}</TableCell>
                            <TableCell align="left">{row.Description}</TableCell>
                            <TableCell align="left">{row.Recruitment}</TableCell>
                            <TableCell align="left">{row.Enrollment}</TableCell>
                            <TableCell align="left">
                                <TableBody>
                                {row.Companies.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                          <Link to={`/companysummary/${r.FID_S}`} >{r.Name}</Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </TableCell>
                            <TableCell align="left">
                                <TableBody>
                                {row.DevelopmentStages.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                            {r.Name}
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </TableCell>
                            <TableCell align="left">
                                <TableBody>
                                {row.Diseases.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                            {r.Name}
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </TableCell>
                            <TableCell align="left">
                                <TableBody>
                                {row.TherapeuticMolecules.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                          <Link to={`/therapeuticmoleculedetail/${r.FID_S}`} >{r.Name}</Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </TableCell>
                            <TableCell align="left">{row.FirstPostedDate}</TableCell>
                            <TableCell align="left">
                                <TableBody>
                                {row.Events.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                            {r.HomePage === "" ? "" : <a href={r.HomePage} target="_blank" rel="noopener noreferrer">{r.Name}</a>}
                                        </TableCell>
                                        <TableCell>{r.EventDate}</TableCell>
                                        <TableCell>{r.Type}</TableCell>
                                        <TableCell align="left">
                                            <TableBody>
                                            {r.EventOutcomes.map(n => (
                                                <TableRow key={n.Name}>
                                                    <TableCell component="th" scope="row">
                                                        {n.Name}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                            </TableBody>
                                        </TableCell>
                                        <TableCell align="left">
                                            <TableBody>
                                            {r.EventOutcomeTypes.map(n => (
                                                <TableRow key={n.Name}>
                                                    <TableCell component="th" scope="row">
                                                        {n.Name}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                            </TableBody>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </TableCell>
                            <TableCell align="left">
                                <TableBody>
                                {row.Predictions.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                            {r.HomePage === "" ? "" : <a href={r.HomePage} target="_blank" rel="noopener noreferrer">{r.Name}</a>}
                                        </TableCell>
                                        <TableCell>{r.EventDate}</TableCell>
                                        <TableCell>{r.EventQuarter}</TableCell>
                                        <TableCell>{r.EventActualDate}</TableCell>
                                        <TableCell align="left">
                                            <TableBody>
                                            {r.Outcome.map(n => (
                                                <TableRow key={n.Name}>
                                                    <TableCell component="th" scope="row">
                                                        {n.Name}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                            </TableBody>
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
        <TabPanel value={value} index={3}>
          <SimilarMoleculeList TherapeuticMolecule={props.Name}/>
        </TabPanel>
        <TabPanel value={value} index={4}>
        <Paper elevation={3}>
            <TableContainer component={Paper} className={classes.container}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead stickyHeader aria-label="sticky table">
                        <TableRow>
                            <TableCell align="left">FID</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">AlternateName</TableCell>
                            <TableCell align="left">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.TherapeuticProducts.map(row => (
                        <TableRow key={row.FID}>
                            <TableCell component="th" scope="row">
                                {row.FID}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Link to={`/therapeuticproductdetail/${row.FID_S}`} >{row.Name}</Link>
                            </TableCell>
                            <TableCell align="left">
                              {row.image === "" ? "" : <a href={row.HomePage} target="_blank" rel="noopener noreferrer"><img alt="No Logo available" height="75" width="180" className="image" src={row.image}/></a>} 
                              </TableCell>
                            <TableCell align="left">{row.Description}</TableCell>
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

export default  TherapeuticMoleculeDetailView;