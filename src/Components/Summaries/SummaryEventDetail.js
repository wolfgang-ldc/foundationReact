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

const SummaryEventDetail = (props) => {
    const classes = useStyles();

  return (
    <React.Fragment className={classes.root}>
        <AppBar position="static">
          <Typography variant="h6" className={classes.title}>
            Event Details
          </Typography>
        </AppBar>
            <TableContainer component={Paper} className={classes.container}>
                <Table stickyHeader aria-label="simple table">
                    <TableHead aria-label="sticky table">
                        <StyledTableRow>
                            <StyledTableCell align="left">HomePage</StyledTableCell>
                            <StyledTableCell align="left">EventDate</StyledTableCell>
                            <StyledTableCell align="left">EventType</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Companies</StyledTableCell>
                            <StyledTableCell align="left">Items</StyledTableCell>                           
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {props.Events.map(row => (
                        <StyledTableRow key={row.Name}>
                            <StyledTableCell align="left">
                                <a href={row.HomePage} target="_blank" rel="noopener noreferrer">
                                <img alt="No Logo available" height="25" width="25" className="image" src="http://localhost/images/weblink"/>
                                </a>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {row.EventDate}
                            </StyledTableCell>
                            <StyledTableCell>
                                <TableBody>
                                {row.EventTypes.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                            {r.Name}
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.Name}</StyledTableCell>
                            <StyledTableCell>
                                <TableBody>
                                {row.Companies.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                          <Link to={`/companysummary/${r.FID_S}`} >{r.Name}</Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </StyledTableCell>
                            <StyledTableCell>
                                <TableBody>
                                {row.Items.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                          {r.Name}
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </StyledTableCell>
                        </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
  </React.Fragment>
  )
}

export default SummaryEventDetail;