import React from 'react'
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


const ItemDetailView = (props) => {
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
              {props.Type} Details
          </Typography>
      </AppBar>
          <h1>
            {props.HomePage === "" ? props.Name : <a href={props.HomePage} target="_blank" rel="noopener noreferrer">{props.Name}</a>} 
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

        </Tabs>
      </AppBar>
      
       </Container>      
  </React.Fragment>
    
    )
};

export default  ItemDetailView;