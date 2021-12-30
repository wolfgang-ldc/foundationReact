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

import Summary from './Summary'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

const GET_SUMMARY_YEAR_QUARTERS = gql`
    query SummaryYearQuarters(
        $year: String,
        $quarter: String
    ){
      summaryByYearAndQuarter(quarter: $quarter, year: $year){
          FID
          FID_S
          Name
          Description
          DateRange{
              Name
          }
        }
    }
`

function SummaryYearQuarter(props) {
    const classes = useStyles();

    const { loading, data, error } = useQuery(GET_SUMMARY_YEAR_QUARTERS, {
      variables: {
        year: props.Year,
        quarter: props.Quarter
      },
    })

    return(
      <div>
      {loading && !error && <p>Loading...</p>}
        {error && !loading && <p>Error</p>}
        {data && !loading && !error && (
          data.summaryByYearAndQuarter.map(row => {
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

                  <Summary DateRangeArray={row.DateRange} Description={row.Description}/>

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

export default SummaryYearQuarter;