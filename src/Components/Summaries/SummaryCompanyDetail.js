import React from 'react'
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
        color: "black"
      },
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
  ,
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const SummaryCompanyDetail = (props) => {
    const classes = useStyles();

  return (
    <React.Fragment className={classes.root}>
        <AppBar position="static">
          <Typography variant="h6" className={classes.title}>
            Company Details
          </Typography>
        </AppBar>
            <TableContainer component={Paper} className={classes.container}>
                <Table stickyHeader aria-label="simple table">
                    <TableHead aria-label="sticky table">
                        <StyledTableRow>
                            <StyledTableCell align="left">BloomLink</StyledTableCell>
                            <StyledTableCell align="left">FID</StyledTableCell>
                            <StyledTableCell align="left">Logo</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">FinanceStatus</StyledTableCell>
                            <StyledTableCell align="left">Description</StyledTableCell>
                            <StyledTableCell align="left">FoundationYear</StyledTableCell>
                            <StyledTableCell align="left">LinkedIn</StyledTableCell>
                            <StyledTableCell align="left">Twitter</StyledTableCell>
                            <StyledTableCell align="left">Location</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {props.Companies.map(row => (
                        <StyledTableRow key={row.Name}>
                          <StyledTableCell align="left">
                              <a href={"neo4j://graphapps/neo4j-bloom/?search=" + row.Name + "&perspective=NewFoundation"} target="_blank" rel="noopener noreferrer">
                              <img alt="No Logo available" height="25" width="25" className="image" src="http://localhost/images/bloom"/>
                              </a>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {row.FID}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              <a href={row.HomePage} target="_blank" rel="noopener noreferrer">
                              <img alt="No Logo available" height="50" width="120" className="image" src={row.image}/>
                              </a>
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              <Link to={`/companysummary/${row.FID_S}`} >{row.Name}</Link>
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              {row.FinanceStatus === "PUBLIC" ? <a href={row.YahooFinance} target="_blank" rel="noopener noreferrer">{row.FinanceStatus}</a> : row.FinanceStatus}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.Description}</StyledTableCell>
                            <StyledTableCell align="left">{row.FoundationYear}</StyledTableCell>
                            <StyledTableCell align="left">
                              {row.LinkedIn === "" ? "" : <a href={row.LinkedIn} target="_blank" rel="noopener noreferrer">
                              <img alt="LinkedIn" height="25" width="25" className="image" src="http://localhost/images/LinkedIn"/></a>}
                            </StyledTableCell>
                            <StyledTableCell>
                              {row.Twitter === "" ? "" : <a href={row.Twitter} target="_blank" rel="noopener noreferrer">
                              <img alt="Twitter" height="25" width="25" className="image" src="http://localhost/images/Twitter"/></a>}
                            </StyledTableCell>
                            <StyledTableCell>
                              {row.Locations[0].Name}
                            </StyledTableCell>
                        </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
  </React.Fragment>
  )
}

export default SummaryCompanyDetail;