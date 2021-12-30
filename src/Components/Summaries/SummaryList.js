import React from 'react'
import { useQuery, gql } from '@apollo/client';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { makeStyles } from '@material-ui/core/styles';
import SummaryQuarter from './SummaryQuarter'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

  const GET_SUMMARY = gql`
      {
        summaryYears{
            FID
            FID_S
            Name
          }
      }
  `
  
function SummaryList() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const { loading, data, error } = useQuery(GET_SUMMARY, {
      variables: {},
    })



    return(
      <div>
        {loading && !error && <p>Loading...</p>}
          {error && !loading && <p>Error</p>}
          {data && !loading && !error && (
            data.summaryYears.map(row => {
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
                      <SummaryQuarter Year={row.Name}/>
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

export default SummaryList;