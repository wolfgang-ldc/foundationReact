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

const SummaryMolecularTargetDetail = (props) => {
    const classes = useStyles();

  return (
    <React.Fragment className={classes.root}>
        <AppBar position="static">
          <Typography variant="h6" className={classes.title}>
            Molecular Target Details
          </Typography>
        </AppBar>
            <TableContainer component={Paper} className={classes.container}>
                <Table stickyHeader aria-label="simple table">
                    <TableHead aria-label="sticky table">
                        <StyledTableRow>
                            <StyledTableCell align="left">BloomLink</StyledTableCell>
                            <StyledTableCell align="left">FID</StyledTableCell>
                            <StyledTableCell align="left">CreationDate</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">AlternateNames</StyledTableCell>
                            <StyledTableCell align="left">Description</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {props.MolecularTargets.map(row => (
                        <StyledTableRow key={row.Name}>
                            <StyledTableCell align="left">
                              <a href={"neo4j://graphapps/neo4j-bloom/?search=" + row.Name + "&perspective=NewFoundation"} target="_blank" rel="noopener noreferrer">
                              <img alt="No Logo available" height="25" width="25" className="image" src="http://localhost/images/bloom"/>
                              </a>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {row.FID}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {row.CreationDate}
                            </StyledTableCell>                            
                            <StyledTableCell align="left">
                              <Link to={`/moleculartargetdetail/${row.FID_S}`} >{row.Name}</Link>
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.AlternateNames}</StyledTableCell>
                            <StyledTableCell align="left">{row.Description}</StyledTableCell>
                        </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
  </React.Fragment>
  )
}

export default SummaryMolecularTargetDetail;