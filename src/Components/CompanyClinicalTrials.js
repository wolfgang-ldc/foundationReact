import React from 'react'
import {Link} from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Paper,
  TableSortLabel,
} from '@material-ui/core'
import TableContainer from '@material-ui/core/TableContainer';
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
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

const GET_COMPANY_CLINICALTRIALS = gql`
query companyClinicalTrials(
  $substring:CompanyWhere
  $orderBy: [ClinicalTrialSort]
  )
{
  companies(
    where:$substring
    ) 
  {
    Name
    ClinicalTrials(
      options:{sort:$orderBy}
      ){
      FID
      FID_S
      Acronym
      Name
      Description
      HomePage
      Type
      FirstPostedDate
      Recruitment
      Enrollment
      Stage
      Companies{
          FID_S
          Name
      }
      TherapeuticMolecules{
          FID_S
          Name                
          MolecularTargets{
            FID_S
            Name
          }
      }
      Diseases{
          FID_S
          Name
      }
      Events{
        FID_S
        Name
        EventDate
        Type
        HomePage
        EventOutcomes{
          Name
        }
        EventOutcomeTypes{
          Name
        }
      }
      Predictions{
        FID
        FID_S
        Name
        EventDate
        EventActualDate
        EventOutcome
        EventQuarter
        HomePage
      }
    }
  }
}
`
  

function CompanyClinicalTrials(props) {
  const classes = useStyles();

  const [order, setOrder] = React.useState('DESC')
  const [orderBy, setOrderBy] = React.useState('FirstPostedDate')
  
  const handleSortRequest = (property) => {
  const newOrderBy = property
    let newOrder = 'DESC'

    if (orderBy === property && order === 'DESC') {
      newOrder = 'ASC'
    }

    setOrder(newOrder)
    setOrderBy(newOrderBy)
  }

  const { loading, data, error } = useQuery(GET_COMPANY_CLINICALTRIALS, {
    variables: {
      substring: {FID_S: parseInt(props.FID_S)} ,
      orderBy: { [orderBy]: order },
    },
  })

  if(props.FID_S !== 0){
    return(
      <div>
      {loading && !error && <p>Loading...</p>}
        {error && !loading && <p>Error</p>}
        {data && !loading && !error && (
                <React.Fragment className={classes.root}>
                <Container maxWidth="false">
                        <TableContainer component={Paper} className={classes.container}>
                            <Table aria-label="simple table">
                                <TableHead stickyHeader aria-label="sticky table">
                                    <StyledTableRow>
                                        <StyledTableCell align="left">Bloom</StyledTableCell>
                                        <StyledTableCell
                                          key="FID"
                                          sortDirection={orderBy === 'FID' ? order : false}
                                        >
                                          <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                                            <TableSortLabel
                                              active={orderBy === 'FID'}
                                              direction={order}
                                              onClick={() => handleSortRequest('FID')}
                                            >
                                              Weblink
                                            </TableSortLabel>
                                          </Tooltip>
                                        </StyledTableCell>
                                        <StyledTableCell
                                          key="Name"
                                          sortDirection={orderBy === 'Name' ? order : false}
                                        >
                                          <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                                            <TableSortLabel
                                              active={orderBy === 'Name'}
                                              direction={order}
                                              onClick={() => handleSortRequest('Name')}
                                            >
                                              Name
                                            </TableSortLabel>
                                          </Tooltip>
                                        </StyledTableCell>
                                        <StyledTableCell
                                          key="Acronym"
                                          sortDirection={orderBy === 'Acronym' ? order : false}
                                        >
                                          <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                                            <TableSortLabel
                                              active={orderBy === 'Acronym'}
                                              direction={order}
                                              onClick={() => handleSortRequest('Acronym')}
                                            >
                                              Acronym
                                            </TableSortLabel>
                                          </Tooltip>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">Description</StyledTableCell>
                                        <StyledTableCell
                                          key="Stage"
                                          sortDirection={orderBy === 'Stage' ? order : false}
                                        >
                                          <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                                            <TableSortLabel
                                              active={orderBy === 'Stage'}
                                              direction={order}
                                              onClick={() => handleSortRequest('Stage')}
                                            >
                                              Stage
                                            </TableSortLabel>
                                          </Tooltip>
                                        </StyledTableCell>
                                        <StyledTableCell
                                          key="Enrollment"
                                          sortDirection={orderBy === 'Enrollment' ? order : false}
                                        >
                                          <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                                            <TableSortLabel
                                              active={orderBy === 'Enrollment'}
                                              direction={order}
                                              onClick={() => handleSortRequest('Enrollment')}
                                            >
                                              Enrollment
                                            </TableSortLabel>
                                          </Tooltip>
                                        </StyledTableCell>
                                        <StyledTableCell
                                          key="Recruitment"
                                          sortDirection={orderBy === 'Recruitment' ? order : false}
                                        >
                                          <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                                            <TableSortLabel
                                              active={orderBy === 'Recruitment'}
                                              direction={order}
                                              onClick={() => handleSortRequest('Recruitment')}
                                            >
                                              Recruitment
                                            </TableSortLabel>
                                          </Tooltip>
                                        </StyledTableCell>
                                        <StyledTableCell
                                          key="FirstPostedDate"
                                          sortDirection={orderBy === 'FirstPostedDate' ? order : false}
                                        >
                                          <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                                            <TableSortLabel
                                              active={orderBy === 'FirstPostedDate'}
                                              direction={order}
                                              onClick={() => handleSortRequest('FirstPostedDate')}
                                            >
                                              FirstPostedDate
                                            </TableSortLabel>
                                          </Tooltip>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">Companies</StyledTableCell>
                                        <StyledTableCell align="left">Molecules</StyledTableCell>
                                        <StyledTableCell align="left">Diseases</StyledTableCell>
                                        <StyledTableCell align="left">Events</StyledTableCell>
                                        <StyledTableCell align="left">Predictions</StyledTableCell>
                                    </StyledTableRow>
                                </TableHead>
                                <TableBody>
                                    {data.companies[0].ClinicalTrials.map(row => (
                                    <StyledTableRow key={row.FID}>
                                      <StyledTableCell component="th" scope="row">
                                          <a href={"neo4j://graphapps/neo4j-bloom/?search=" + row.Name + "&perspective=FoundationBiology"} target="_blank" rel="noopener noreferrer">
                                          <img alt="No Logo available" height="25" width="25" className="image" src="http://localhost/images/bloom"/>
                                          </a>
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row">
                                          <a href={"https://clinicaltrials.gov/ct2/results?cond=&term=" + row.Name + "&cntry=&state=&city=&dist="} target="_blank" rel="noopener noreferrer">
                                          <img alt="No Logo available" height="25" width="25" className="image" src="http://localhost/images/weblink"/>
                                          </a>
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row">
                                          <Link to={`/clinicaltrialdetail/${row.FID_S}`} >{row.Name}</Link>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.Acronym}</StyledTableCell>
                                        <StyledTableCell align="left">{row.Description}</StyledTableCell>
                                        <StyledTableCell align="left">{row.Stage}</StyledTableCell>
                                        <StyledTableCell align="left">{row.Enrollment}</StyledTableCell>
                                        <StyledTableCell align="left">{row.Recruitment}</StyledTableCell>
                                        <StyledTableCell align="left">{row.FirstPostedDate}</StyledTableCell>
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
                                            {row.TherapeuticMolecules.map(r => (
                                                <TableRow key={r.Name}>
                                                    <TableCell component="th" scope="row">
                                                        <Link to={`/therapeuticmoleculedetail/${r.FID_S}`} >{r.Name}</Link>
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        <TableBody>
                                                        {r.MolecularTargets.map(n => (
                                                            <TableRow key={n.Name}>
                                                                <TableCell component="th" scope="n">
                                                                    <Link to={`/moleculartargetdetail/${n.FID_S}`} >{n.Name}</Link>
                                                                </TableCell>
                                                            </TableRow>
                                                        ))}
                                                        </TableBody>
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
                                            {row.Events.map(r => (
                                                <TableRow key={r.Name}>
                                                    <TableCell component="th" scope="row">
                                                        {r.HomePage === "" ? "" : <a href={r.HomePage} target="_blank" rel="noopener noreferrer">{r.Name}</a>}
                                                    </TableCell>
                                                    <TableCell>{r.EventDate}</TableCell>
                                                    <TableCell>{r.Type}</TableCell>
                                                    <TableCell align="left">
                                                        <TableBody>
                                                        {r.EventOutcomes.map(n => (
                                                            <TableRow key={n.Name}>
                                                                <TableCell component="th" scope="row">
                                                                    {n.Name}
                                                                </TableCell>
                                                            </TableRow>
                                                        ))}
                                                        </TableBody>
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        <TableBody>
                                                        {r.EventOutcomeTypes.map(n => (
                                                            <TableRow key={n.Name}>
                                                                <TableCell component="th" scope="row">
                                                                    {n.Name}
                                                                </TableCell>
                                                            </TableRow>
                                                        ))}
                                                        </TableBody>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                            </TableBody>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            <TableBody>
                                            {row.Predictions.map(r => (
                                                <TableRow key={r.Name}>
                                                    <TableCell component="th" scope="row">
                                                      {r.HomePage === "" ? "" : <a href={r.HomePage} target="_blank" rel="noopener noreferrer">{r.Name}</a>}
                                                    </TableCell>
                                                    <TableCell>{r.EventDate}</TableCell>
                                                    <TableCell>{r.EventQuarter}</TableCell>
                                                    <TableCell>{r.EventActualDate}</TableCell>
                                                    <TableCell>{r.EventOutcome}</TableCell>
                                                </TableRow>
                                            ))}
                                            </TableBody>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                  </Container>
              </React.Fragment>
            )  
          }
      </div> 
    )
}
else{
    return (
        <Container maxWidth="lg">
          <AppBar position="static">
            <Typography variant="h6" >
              Clinical Trial Details
            </Typography>
          </AppBar>
          <Paper elevation={3}>
              No Clinical Trial Details available for display!
          </Paper>
        </Container>
    );
}
}

  
export default CompanyClinicalTrials;