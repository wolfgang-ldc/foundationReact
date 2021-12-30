import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

//import Accordion from '@material-ui/core/Accordion';
//import AccordionSummary from '@material-ui/core/AccordionSummary';
//import AccordionDetails from '@material-ui/core/AccordionDetails';
//import Typography from '@material-ui/core/Typography';
//import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SummaryYearQuarter from './SummaryYearQuarter'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

  const GET_SUMMARY_QUARTERS = gql`
    query SummaryQuarters(
        $year: String
    ){
      summaryQuartersByYear(year: $year){
          FID
          FID_S
          Name
        }
    }
`
  
function SummaryQuarter(props) {
    const classes = useStyles();

    const { loading, data, error } = useQuery(GET_SUMMARY_QUARTERS, {
      variables: {
        year: props.Year
      },
    })


    return(
      <div>
      {loading && !error && <p>Loading...</p>}
        {error && !loading && <p>Error</p>}
        {data && !loading && !error && (
          data.summaryQuartersByYear.map(row => {
            return ( 

              <MuiAccordion>
              <MuiAccordionSummary
              expandIcon={<ArrowForwardIosSharpIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              >
              <Typography className={classes.heading}>{row.Name}</Typography>
              </MuiAccordionSummary>
              <MuiAccordionDetails>
              <ul className={classes.root}>
                  <li>

                  <SummaryYearQuarter Year={props.Year} Quarter={row.Name}/>

              </li>
              </ul>
              </MuiAccordionDetails>
          </MuiAccordion> 
            )  
          }
        ))}
      </div>
    )
}

export default SummaryQuarter;