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

//import SimilarMoleculeList from './SimilarMoleculeList'

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

const ClinicalTrialDetailView = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    //Extract multiple values into a comma-separated list to display in a single field
    var CompanyList = "";
    props.Companies.map(r => (
      CompanyList = CompanyList + r.Name + ", "
    ))
    var DiseasesList = "";
    props.Diseases.map(r => (
      DiseasesList = DiseasesList + r.Name + ", "
    ))
    var TherapeuticMoleculeList = "";
    props.TherapeuticMolecules.map(r => (
      TherapeuticMoleculeList = TherapeuticMoleculeList + r.Name + ", "
    ))

  return (
    <React.Fragment className={classes.root}>
    <CssBaseline />
    <Container maxWidth="lg">
    <AppBar position="static">
        <Typography variant="h6" className={classes.title}>
            Clinical Trial Details
        </Typography>
    </AppBar>
    <Grid container spacing={2}>
      <Grid item xs={4}>
    <Paper elevation={3} className={classes.paper}>
        <h1>
            {props.HomePage === "" ? "" : <a href={props.HomePage} target="_blank" rel="noopener noreferrer">{props.Name}</a>} 
        </h1>
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
          label="Clinical Trial Name"
          multiline
          rowsMax={1}
          fullWidth="true"
          value={props.Name}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Acronym"
          multiline
          rowsMax={1}
          fullWidth="true"
          value={props.Acronym}
        />
        <TextField
          id="standard-multiline-flexible"
          label=" ExtractedCompany Name"
          multiline
          rowsMax={1}
          fullWidth="true"
          value={CompanyList}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Extracted TherapeuticMolecule Name"
          multiline
          rowsMax={1}
          fullWidth="true"
          value={TherapeuticMoleculeList}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Extracted Disease Name"
          multiline
          rowsMax={1}
          fullWidth="true"
          value={DiseasesList}
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
        <TextField
          id="standard-multiline-flexible"
          label="Recruitment"
          multiline
          fullWidth="true"
          size="small"
          value={props.Recruitment}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Enrollment"
          multiline
          fullWidth="true"
          size="small"
          value={props.Enrollment}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Stage"
          multiline
          fullWidth="true"
          size="small"
          value={props.Stage}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Copied Conditions"
          multiline
          fullWidth="true"
          size="small"
          value={props.Conditions}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Copied Intervention"
          multiline
          fullWidth="true"
          size="small"
          value={props.Intervention}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Copied Sponsor Collaborator"
          multiline
          fullWidth="true"
          size="small"
          value={props.SponsorCollaborator}
        />
        <TextField
          id="standard-multiline-flexible"
          label="First Posted Date"
          multiline
          rowsMax={1}
          fullWidth="true"
          value={props.FirstPostedDate}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Start Date"
          multiline
          rowsMax={1}
          fullWidth="true"
          value={props.StartDate}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Completion Date"
          multiline
          rowsMax={1}
          fullWidth="true"
          value={props.CompletionDate}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Study Type"
          multiline
          rowsMax={1}
          fullWidth="true"
          value={props.StudyType}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Study Results"
          multiline
          rowsMax={1}
          fullWidth="true"
          value={props.StudyResults}
        />
    </Paper>
    </Grid>
    </Grid>

      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Events"  {...a11yProps(0)} />
          <Tab label="Predictions" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Paper elevation={3}>
            <TableContainer component={Paper} className={classes.container}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead stickyHeader aria-label="sticky table">
                        <TableRow>
                            <TableCell align="left">FID</TableCell>
                            <TableCell align="left">Event Date</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Type</TableCell>
                            <TableCell align="left">Company / Molecule</TableCell>
                            <TableCell align="left">Outcome</TableCell>
                            <TableCell align="left">Outcome Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.Events.map(row => (
                        <TableRow key={row.FID}>
                            <TableCell component="th" scope="row">
                                {row.FID_S}
                            </TableCell>
                            <TableCell align="left">{row.EventDate}</TableCell>
                            <TableCell component="th" scope="row">
                                <a href={row.HomePage} target="_blank" rel="noopener noreferrer">{row.Name}</a>
                            </TableCell>
                            <TableCell align="left">{row.Type}</TableCell>
                            {row.Companies.map(r => (
                              <TableRow key={r.FID}>
                                  <TableCell align="left">
                                      <Link to={`/companysummary/${r.FID_S}`} >{r.Name}</Link>
                                  </TableCell>
                              </TableRow>
                            ))}
                            {row.ApprovedMolecules.map(r => (
                              <TableRow key={r.FID}>
                                  <TableCell align="left">
                                      <Link to={`/therapeuticmoleculedetail/${r.FID_S}`} >{r.Name}</Link>
                                  </TableCell>
                              </TableRow>
                            ))}
                            <TableCell align="left">
                              {row.EventOutcomes.map(r => (
                                <TableRow key={r.FID}>
                                    <TableCell align="left">
                                        {r.Name}
                                    </TableCell>
                                </TableRow>
                              ))}
                            </TableCell>
                            <TableCell align="left">
                              {row.EventOutcomeTypes.map(r => (
                                <TableRow key={r.FID}>
                                    <TableCell align="left">
                                        {r.Name}
                                    </TableCell>
                                </TableRow>
                              ))}
                            </TableCell>
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
                            <TableCell align="left">Type</TableCell>
                            <TableCell align="left">Actual Date</TableCell>
                            <TableCell align="left">Planned Date</TableCell>
                            <TableCell align="left">Planned Quarter</TableCell>
                            <TableCell align="left">Planned Year</TableCell>
                            <TableCell align="left">Company / Molecule</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.Predictions.map(row => (
                        <TableRow key={row.FID}>
                            <TableCell component="th" scope="row">
                                {row.FID_S}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <a href={row.HomePage} target="_blank" rel="noopener noreferrer">{row.Name}</a>
                            </TableCell>
                            <TableCell align="left">{row.Type}</TableCell>
                            <TableCell align="left">{row.EventActualDate}</TableCell>
                            <TableCell align="left">{row.EventDate}</TableCell>
                            <TableCell align="left">{row.EventQuarter}</TableCell>
                            <TableCell align="left">{row.EventYear}</TableCell>
                            {row.Companies.map(r => (
                              <TableRow key={r.FID}>
                                  <TableCell align="left">
                                      <Link to={`/companysummary/${r.FID_S}`} >{r.Name}</Link>
                                  </TableCell>
                              </TableRow>
                            ))}
                            {row.Molecules.map(r => (
                              <TableRow key={r.FID}>
                                  <TableCell align="left">
                                      <Link to={`/therapeuticmoleculedetail/${r.FID_S}`} >{r.Name}</Link>
                                  </TableCell>
                              </TableRow>
                            ))}
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

export default  ClinicalTrialDetailView;