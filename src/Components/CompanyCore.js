import React from 'react'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {
  Paper,
  TextField,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    container: {
        maxHeight: 200,
      },
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
  ,
}));


function CompanyCore(props) {
  const classes = useStyles();
  var myHREF =  "https://finance.yahoo.com/quote/" + props.NewSynonyms
        if(props.Name !== ""){               
                  return (
                    <div>

                        <React.Fragment className={classes.root}>
                        <Container maxWidth="xl">
                        <AppBar position="static">
                              <Typography variant="h6" className={classes.title}>
                                Company Details
                              </Typography>
                        </AppBar>
                        <h1>
                            {props.HomePage === "" ? "" : <a href={props.HomePage} target="_blank" rel="noopener noreferrer">{props.Name}</a>} 
                        </h1>
                        <h3> 
                            {props.FinanceStatus === "PRIVATE" ? "" : <a href={myHREF} target="_blank" rel="noopener noreferrer">{props.NewSynonyms}</a>} 
                        </h3>
                        <Grid container spacing={2}>
                          <Grid item xs={3}>
                        <Paper elevation={3}>
                          <p>
                            <img alt="No Logo available" height="75" width="160" className="image" src={props.image}/>
                          </p>
                          
                          <TextField
                              id="standard-multiline-flexible"
                              label="Finance Status"
                              multiline
                              fullWidth="true"
                              size="small"
                              value={props.FinanceStatus} 
                          /><TextField
                              id="standard-multiline-flexible"
                              label="Foundation Year"
                              multiline
                              fullWidth="true"
                              size="small"
                              value={props.FoundationYear} 
                          />
                          <TextField
                              id="standard-multiline-flexible"
                              label="Ticker Symbol"
                              multiline
                              fullWidth="true"
                              size="small"
                              value={props.Ticker} 
                          />
                          <TextField
                              id="standard-multiline-flexible"
                              label="Company Location"
                              multiline
                              fullWidth="true"
                              size="small"
                              value={props.Location} 
                          />
                          <TextField
                              id="standard-multiline-flexible"
                              label="Company Class"
                              multiline
                              fullWidth="true"
                              size="small"
                              value={props.CompanyClassification} 
                          />
                          <TextField
                              id="standard-multiline-flexible"
                              label="Therapeutic Areas"
                              multiline
                              fullWidth="true"
                              size="small"
                              value={props.TherapeuticAreas} 
                          />
                        </Paper>
                        </Grid>
                          <Grid item xs={9}>
                            <Paper><TextField
                              id="standard-multiline-flexible"
                              label="Company Description"
                              multiline
                              fullWidth="true"
                              size="small"
                              value={props.Description}
                            />
                            </Paper>
                          </Grid>
                        </Grid>

                        </Container>
                      </React.Fragment>
                    </div>
            )

        }
        else{
            return (
                <Container maxWidth="lg">
                  <AppBar position="static">
                    <Typography variant="h6" >
                      Company Details
                    </Typography>
                  </AppBar>
                  <Paper elevation={3}>
                      No Company Details available for display!
                  </Paper>
                </Container>
            );
        }
}

export default CompanyCore;