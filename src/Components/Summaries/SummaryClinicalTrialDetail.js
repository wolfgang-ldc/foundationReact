import React from 'react'
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
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

const SummaryClinicalTrialDetail = (props) => {
    const classes = useStyles();

  return (
    <React.Fragment className={classes.root}>

    <AppBar position="static">
          <Typography variant="h6" className={classes.title}>
            Clinical Trial Details
          </Typography>
      </AppBar>
            <TableContainer component={Paper} className={classes.container}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead stickyHeader aria-label="sticky table">
                        <StyledTableRow>
                            <StyledTableCell align="left">BloomLink</StyledTableCell>
                            <StyledTableCell align="left">WebLink</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Description</StyledTableCell>
                            <StyledTableCell align="left">Recruitment</StyledTableCell>
                            <StyledTableCell align="left">Enrollment</StyledTableCell>
                            <StyledTableCell align="left">Company</StyledTableCell>
                            <StyledTableCell align="left">Stage</StyledTableCell>
                            <StyledTableCell align="left">Disease</StyledTableCell>
                            <StyledTableCell align="left">Molecule & Target</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {props.ClinicalTrials.map(row => (
                        <StyledTableRow key={row.Name}>
                            <StyledTableCell align="left">
                              <a href={"neo4j://graphapps/neo4j-bloom/?search=" + row.Name + "&perspective=FoundationBiology"} target="_blank" rel="noopener noreferrer">
                              <img alt="No Logo available" height="25" width="25" className="image" src="http://localhost/images/bloom"/>
                              </a>
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              <a href={"https://clinicaltrials.gov/ct2/results?cond=&term=" + row.Name + "&cntry=&state=&city=&dist="} target="_blank" rel="noopener noreferrer">
                              <img alt="No Logo available" height="25" width="25" className="image" src="http://localhost/images/weblink"/>
                              </a>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                              <Link to={`/clinicaltrialdetail/${row.FID_S}`} >{row.Name}</Link>                        
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.Description}</StyledTableCell>
                            <StyledTableCell align="left">{row.Recruitment}</StyledTableCell>
                            <StyledTableCell align="left">{row.Enrollment}</StyledTableCell>
                            <StyledTableCell align="left">
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
                            <StyledTableCell align="left">
                                <TableBody>
                                {row.DevelopmentStages.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                            {r.Name}
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <TableBody>
                                {row.Diseases.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                            {r.Name}
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <TableBody>
                                {row.TherapeuticMolecules.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                          <Link to={`/therapeuticmoleculedetail/${r.FID_S}`} >{r.Name}</Link>
                                        </TableCell>
                                        <TableCell align="left">
                                            <TableBody>
                                            {r.MolecularTargets.map(z => (
                                                <TableRow key={z.Name}>
                                                    <TableCell component="th" scope="z">
                                                      <Link to={`/moleculartargetdetail/${z.FID_S}`} >{z.Name}</Link>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                            </TableBody>
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

export default SummaryClinicalTrialDetail;