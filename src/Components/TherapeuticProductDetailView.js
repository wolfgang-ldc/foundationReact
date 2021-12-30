import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';



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


export default class TherapeuticProductDetailView extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  //classes = useStyles();


  render() {
    
    var ApprovedDiseasesList = "";
    {this.props.ApprovedDiseases.map(r => (
      ApprovedDiseasesList = ApprovedDiseasesList  + r.Name + ","             
    ))}

    return (
      <React.Fragment >
      <CssBaseline />
      <Container maxWidth="lg">
      <AppBar position="static">
          <Typography variant="h6" >
              Therapeutic Product Details
          </Typography>
      </AppBar>
          <h1>
            {this.props.HomePage === "" ? "" : <a href={this.props.HomePage} target="_blank" rel="noopener noreferrer">{this.props.Name}</a>} 
          </h1>
          <h3>
            {this.props.Molecules[0].Name === "" ? "" : <Link to={`/therapeuticmoleculedetail/${this.props.Molecules[0].FID_S}`} >{this.props.Molecules[0].Name}</Link>} 
          </h3>
      <Grid container spacing={2}>
      <Grid item xs={4}>
        <Paper elevation={3}>
          <TextField
            id="standard-multiline-flexible"
            label="ID"
            multiline
            rowsMax={1}
            fullWidth="true"
            value={this.props.FID}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Therapeutic Molecule Name"
            multiline
            rowsMax={1}
            fullWidth="true"
            value={this.props.MoleculeList}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Company Name"
            multiline
            rowsMax={1}
            fullWidth="true"
            value={this.props.CompanyList}
          />
          <h1>
            {this.props.image === "" ? "" : <a href={this.props.HomePage} target="_blank" rel="noopener noreferrer"><img alt="No Logo available" height="75" width="180" className="image" src={this.props.image}/></a>} 
          </h1>
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
              value={this.props.Description}
            />
            <TextField
            id="standard-multiline-flexible"
            label="Approved Diseases"
            multiline
            rowsMax={3}
            fullWidth="true"
            value={ApprovedDiseasesList}
          />
        </Paper>
      </Grid>
      </Grid>
       </Container>      
  </React.Fragment>
    );
  }
}
//fill="#8884d8"