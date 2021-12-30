import * as React from 'react';
import "./Nav.css";
import {Link} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import MasterConceptQuery from './MasterConceptQuery';
import SummaryList from './Summaries/SummaryList';
import StatisticsQuery from "./StatisticsQuery";
import StatisticsCoreQuery from "./StatisticsCoreQuery";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 90,
      width: 85,
      align: "center"
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

const Home = () => {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);
    const navStyle = {
        color: 'blue',
    }

    return(
        <div>
            <AppBar position="static">
                <Typography variant="h6" >
                    Preferred Concepts Search
                </Typography>
            </AppBar>
            <br>
            </br>
            <Container maxWidth="lg">
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={13}>
                        <Grid container justify="center" spacing={spacing}>
                            <Grid key="1" item>
                                <Paper className={classes.paper}>
                                    <Typography variant="h10" >
                                        <Link style={navStyle} to='/itemlist'>
                                            <img alt="Item" height="50" width="50" className="image" title="Global Search" src="http://localhost/images/globalsearch"/><br></br>Global Search<br></br>
                                        </Link>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid key="2" item>
                                <Paper className={classes.paper}>
                                    <Typography variant="h10" >
                                        <Link style={navStyle} to='/companylist'>
                                            <img alt="Company" height="50" width="50" className="image" title="Company" src="http://localhost/images/Company"/><br></br>Company<br></br>
                                        </Link>
                                        </Typography>
                                </Paper>
                            </Grid>
                            <Grid key="2" item>
                                <Paper className={classes.paper}>
                                    <Typography variant="h10" >
                                        <Link style={navStyle} to='/companyclasslist'>
                                            <img alt="CompanyClass" height="50" width="50" className="image" title="Company Class" src="http://localhost/images/CompanyClass"/><br></br>Company Class<br></br>
                                        </Link>
                                        </Typography>
                                </Paper>
                            </Grid>
                            <Grid key="3" item>
                                <Paper className={classes.paper}>
                                    <Typography variant="h10" >
                                        <Link style={navStyle} to='/therapeuticmoleculelist'>
                                            <img alt="TherapeuticMolecule" height="50" width="50" className="image" title="TherapeuticMolecule" src="http://localhost/images/TherapeuticMolecule"/><br></br>Therapeutic Molecule<br></br>
                                        </Link>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid key="4" item>
                                <Paper className={classes.paper}>
                                    <Typography variant="h10" >
                                        <Link style={navStyle} to='/moleculartargetlist'>
                                            <img alt="MolecularTarget" height="50" width="50" className="image" title="MolecularTarget" src="http://localhost/images/MolecularTarget"/><br></br>Molecular Target<br></br>
                                        </Link>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid key="4" item>
                                <Paper className={classes.paper}>
                                    <Typography variant="h10" >
                                        <Link style={navStyle} to='/diseaselist'>
                                            <img alt="Disease" height="50" width="50" className="image" title="Disease" src="http://localhost/images/Disease"/><br></br>Disease<br></br>
                                        </Link>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid key="5" item>
                                <Paper className={classes.paper}>
                                    <Typography variant="h10" >
                                        <Link style={navStyle} to='/clinicaltriallist'>
                                            <img alt="Trial" height="50" width="50" className="image" title="Clinical Trial" src="http://localhost/images/ClinicalTrial"/><br></br>Clinical Trial<br></br>
                                        </Link>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid key="6" item>
                                <Paper className={classes.paper}>
                                    <Typography variant="h10" >
                                        <Link style={navStyle} to='/therapeuticproductlist'>
                                            <img alt="TherapeuticProduct" height="50" width="50" className="image" title="TherapeuticProduct" src="http://localhost/images/TherapeuticProduct"/><br></br>Therapeutic Product<br></br>
                                        </Link>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid key="7" item>
                                <Paper className={classes.paper}>
                                    <Typography variant="h10" >
                                        <Link style={navStyle} to='/predictionlist'>
                                            <img alt="Prediction" height="50" width="50" className="image" title="Prediction" src="http://localhost/images/Prediction"/><br></br>Prediction Search<br></br>
                                        </Link>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid key="7" item>
                                <Paper className={classes.paper}>
                                    <Typography variant="h10" >
                                        <Link style={navStyle} to='/predictioncalendar'>
                                            <img alt="Prediction" height="50" width="50" className="image" title="Prediction Calendar" src="http://localhost/images/Prediction"/><br></br>Prediction Calendar<br></br>
                                        </Link>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid key="8" item>
                                <Paper className={classes.paper}>
                                    <Typography variant="h10" >
                                        <Link style={navStyle} to='/sourcereferencelist'>
                                            <img alt="Reference" height="50" width="50" className="image" title="Reference" src="http://localhost/images/SourceReference"/><br></br>Source Reference<br></br>
                                        </Link>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid key="9" item>
                                <Paper className={classes.paper}>
                                    <Typography variant="h10" >
                                        <Link style={navStyle} to='/qanda/qanda'>
                                            <img alt="Q and A" height="50" width="50" className="image" title="Question and Answer" src="http://localhost/images/QandA"/><br></br>Question & Answer<br></br>
                                        </Link>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid key="10" item>
                                <Paper className={classes.paper}>
                                    <Typography variant="h10" >
                                        <Link style={navStyle} to='/biologicalprocesslist'>
                                            <img alt="BiologicalProcess" height="50" width="50" className="image" title="BiologicalProcess" src="http://localhost/images/BiologicalProcess"/><br></br>Biological Process<br></br>
                                        </Link>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid key="10" item>
                                <Paper className={classes.paper}>
                                    <Typography variant="h10" >
                                        <Link style={navStyle} to='/scorecardlist'>
                                            <img alt="ScoreCard" height="50" width="50" className="image" title="ScoreCard" src="http://localhost/images/ScoreCard"/><br></br>ScoreCard<br></br>
                                        </Link>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid key="11" item>
                                <Paper className={classes.paper}>
                                    <Typography variant="h10" >
                                        <a href="neo4j://graphapps/neo4j-bloom/?search=EPOGEN&perspective=FoundationBiology" target="_blank" rel="noopener noreferrer"><img alt="Bloom" height="50" width="50" className="image" title="Bloom" src="http://localhost/images/bloom"/></a><br></br>Bloom Visualiztion<br></br>
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <br>
            </br>

            <AppBar position="static">
                <Typography variant="h6" >
                    Weekly Content Summaries
                </Typography>
            </AppBar>

            <SummaryList />

            <Accordion>
                <AccordionSummary
                expandIcon={<ArrowForwardIosSharpIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <AppBar position="static">
                    <Typography variant="h6" >
                        Master Concept Search
                    </Typography>
                </AppBar>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                    </p>
                    <MasterConceptQuery />
                </AccordionDetails>
            </Accordion> 
            <Accordion>
                <AccordionSummary
                expandIcon={<ArrowForwardIosSharpIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <AppBar position="static">
                        <Typography variant="h6" >
                            Knowledge Graph Core Statistics
                        </Typography>
                    </AppBar>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                    </p>
                    <StatisticsCoreQuery />
                </AccordionDetails>
            </Accordion> 
            <Accordion>
                <AccordionSummary
                expandIcon={<ArrowForwardIosSharpIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <AppBar position="static">
                        <Typography variant="h6" >
                            Knowledge Graph Overall Statistics
                        </Typography>
                    </AppBar>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                    </p>
                    <StatisticsQuery />
                </AccordionDetails>
            </Accordion> 

        </div>
    )
}

export default Home;