import React from 'react'
import {Link} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

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
        maxWidth: "false",
      },
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
  ,
}));


const MolecularTargetDetailView = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <React.Fragment >
      <CssBaseline />
      <Container maxWidth="lg">
      <AppBar position="static">
          <Typography variant="h6" >
              Molecular Target Details
          </Typography>
      </AppBar>
          <h1>
            {props.HomePage === "" ? "" : <a href={props.HomePage} target="_blank" rel="noopener noreferrer">{props.Name} @ HGNC</a>} 
          </h1>
          <h1>
            <a href={"https://www.genecards.org/cgi-bin/carddisp.pl?gene=" + props.Name} target="_blank" rel="noopener noreferrer">
              {props.Name} @ GeneCards
            </a>
          </h1>
      <Grid container spacing={2}>
      <Grid item xs={4}>
        <Paper elevation={3}>
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
              label="Synonyms"
              multiline
              fullWidth="true"
              size="small"
              value={props.AlternateNames}
            />
          </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper>
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
          <Tab label="Therapeutic Molecules"  {...a11yProps(0)} />
          <Tab label="Source References"  {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Paper elevation={3}>
            <TableContainer component={Paper} className={classes.container} maxWidth = "false">
                <Table className={classes.table} aria-label="simple table">
                    <TableHead stickyHeader aria-label="sticky table">
                        <TableRow>
                            <TableCell align="left">FID</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">AlternateName</TableCell>
                            <TableCell align="left">Highest Stage</TableCell>
                            <TableCell align="left">Modality</TableCell>
                            <TableCell align="left">Companies</TableCell>
                            <TableCell align="left">Targets</TableCell>
                            <TableCell align="left">Trials</TableCell>
                            <TableCell align="left">Events</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.TherapeuticMolecules.map(row => (
                        <TableRow key={row.FID}>
                            <TableCell component="th" scope="row">
                                {row.FID}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Link to={`/therapeuticmoleculedetail/${row.FID_S}`} >{row.Name}</Link>
                            </TableCell>
                            <TableCell align="left">{row.PipelineStatus}</TableCell>
                            <TableCell align="left">{row.AlternateNames}</TableCell>
                            <TableCell align="left">{row.HighestDevelopmentStage}</TableCell>
                            <TableCell align="left">{row.PrimaryModality}</TableCell>
                            <TableCell align="left">
                                <TableBody>
                                {row.Companies.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                          <Link to={`/companysummary/${r.FID_S}`} >{r.Name}</Link>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                          {r.FinanceStatus}
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </TableCell>
                            <TableCell align="left">
                                <TableBody>
                                {row.MolecularTargets.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                          <Link to={`/moleculartargetdetail/${r.FID_S}`} >{r.Name}</Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </TableCell>
                            <TableCell align="left">
                                <TableBody>
                                {row.ClinicalTrials.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                          <Link to={`/clinicaltrialdetail/${r.FID_S}`} >{r.Name}</Link>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                          {r.Recruitment}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                          {r.FirstPostedDate}
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </TableCell>
                            <TableCell align="left">
                                <TableBody>
                                {row.Events.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                          <a href={r.HomePage} target="_blank" rel="noopener noreferrer">{r.Name}</a>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                          {r.EventDate}
                                        </TableCell>
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
      <TabPanel value={value} index={1}>
        <Paper elevation={3}>
            <TableContainer component={Paper} className={classes.container}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead stickyHeader aria-label="sticky table">
                        <TableRow>
                            <TableCell align="left">FID</TableCell>
                            <TableCell align="left">HomePage</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">CreationDate</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">Items</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.SourceReferences.map(row => (
                        <TableRow key={row.FID_S}>
                            <TableCell component="th" scope="row">
                                {row.FID_S}
                            </TableCell>
                            <TableCell align="left">
                              {row.HomePage === "" ? "" : <a href={row.HomePage} target="_blank" rel="noopener noreferrer">
                              <img alt="WebLink" height="25" width="25" className="image" src="http://localhost/images/weblink"/></a>}                         
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Link to={`/sourcereferencedetail/${row.FID_S}`} >{row.Name}</Link>
                            </TableCell>
                            <TableCell align="left">{row.CreationDate}</TableCell>
                            <TableCell align="left">{row.Description}</TableCell>
                            <TableCell align="left">
                                <TableBody>
                                {row.Items.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                          <Link to={`/companysummary/${r.FID_S}`} >{r.Name}</Link>
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
};

export default  MolecularTargetDetailView;