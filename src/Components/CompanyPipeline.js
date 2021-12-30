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
  
const GET_COMPANY_PIPELINE = gql`
query companyPipeline(
  $substring:CompanyWhere)
{
  companies(
    where:$substring
    ) 
    {
      Name
      CompletePipelineMolecules{
      FID
      FID_S
      Name
      PipelineStatus
      Description
      Type
      AlternateNames
      PrimaryModality
      Modalities{
          Name
      }
      HighestDevelopmentStage
      Companies{
          FID_S
          Name
      }
      MolecularTargets{
          FID
          FID_S
          Name
          Description
          AlternateNames
          HomePage
      }
      ClinicalTrials{
          FID_S
          Name
          Description
          Recruitment
          Enrollment
          Companies{
          Name
          }
          DevelopmentStages{
          Name
          }
          Diseases{
          Name
          }
          TherapeuticMolecules{
          Name
          }
      }
      Diseases{
        FID_S
        Name
      }
    } 
  }
}
`

function CompanyPipeline(props) {
  const classes = useStyles();

  console.log(props.FID_S)
  const [order, setOrder] = React.useState('ASC')
  const [orderBy, setOrderBy] = React.useState('PipelineStatus')
  const [page] = React.useState(0)
  const [rowsPerPage] = React.useState(50)
  
  const handleSortRequest = (property) => {
    const newOrderBy = property
    let newOrder = 'DESC'

    if (orderBy === property && order === 'DESC') {
      newOrder = 'ASC'
    }

    setOrder(newOrder)
    setOrderBy(newOrderBy)
  }

  const { loading, data, error } = useQuery(GET_COMPANY_PIPELINE, {
    variables: {
      substring: {FID_S: parseInt(props.FID_S)} ,
    },
  })

  if(props.FID_S !== ""){
    return(
      <div>
      {loading && !error && <p>Loading...</p>}
        {error && !loading && <p>Error</p>}
        {data && !loading && !error && (
              <React.Fragment className={classes.root}>
                <Container maxWidth="lg">
                        <TableContainer component={Paper} className={classes.container}>
                            <Table aria-label="simple table" >
                                <TableHead stickyHeader aria-label="sticky table" >
                                    <TableRow>
                                        <TableCell
                                          key="FID"
                                          sortDirection={orderBy === 'FID' ? order : false}
                                        >
                                          <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                                            <TableSortLabel
                                              active={orderBy === 'FID'}
                                              direction={order}
                                              onClick={() => handleSortRequest('FID')}
                                            >
                                              ID
                                            </TableSortLabel>
                                          </Tooltip>
                                        </TableCell>
                                        <TableCell
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
                                        </TableCell>
                                        <TableCell
                                          key="PipelineStatus"
                                          sortDirection={orderBy === 'PipelineStatus' ? order : false}
                                        >
                                          <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                                            <TableSortLabel
                                              active={orderBy === 'PipelineStatus'}
                                              direction={order}
                                              onClick={() => handleSortRequest('PipelineStatus')}
                                            >
                                              Status
                                            </TableSortLabel>
                                          </Tooltip>
                                        </TableCell>
                                        <TableCell align="left">AlternateName</TableCell>
                                        <TableCell
                                          key="HighestDevelopmentStage"
                                          sortDirection={orderBy === 'HighestDevelopmentStage' ? order : false}
                                        >
                                          <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                                            <TableSortLabel
                                              active={orderBy === 'HighestDevelopmentStage'}
                                              direction={order}
                                              onClick={() => handleSortRequest('HighestDevelopmentStage')}
                                            >
                                              Stage
                                            </TableSortLabel>
                                          </Tooltip>
                                        </TableCell>
                                        <TableCell align="left">Company</TableCell>
                                        <TableCell
                                          key="PrimaryModality"
                                          sortDirection={orderBy === 'PrimaryModality' ? order : false}
                                        >
                                          <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                                            <TableSortLabel
                                              active={orderBy === 'PrimaryModality'}
                                              direction={order}
                                              onClick={() => handleSortRequest('PrimaryModality')}
                                            >
                                              Modality
                                            </TableSortLabel>
                                          </Tooltip>
                                        </TableCell>
                                        <TableCell align="left">Target</TableCell>
                                        <TableCell align="left">Trials</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.companies[0].CompletePipelineMolecules.map(row => (
                                    <TableRow key={row.FID}>
                                        <TableCell component="th" scope="row">
                                            {row.FID}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Link to={`/therapeuticmoleculedetail/${row.FID_S}`} >{row.Name}</Link>
                                        </TableCell>
                                        <TableCell align="left">{row.PipelineStatus}</TableCell>
                                        <TableCell align="left">{row.AlternateNames}</TableCell>
                                        <TableCell align="left">
                                            {row.HighestDevelopmentStage}
                                        </TableCell>
                                        <TableCell align="left">
                                            <TableBody>
                                            {row.Companies.map(r => (
                                                <TableRow key={r.Name}>
                                                    <TableCell component="th" scope="row">
                                                      <Link to={`/companysummary/${r.FID_S}`} >{r.Name}</Link>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                            </TableBody>
                                        </TableCell>
                                        <TableCell align="left">
                                          {row.PrimaryModality === null ? "" : row.PrimaryModality} 
                                        </TableCell>
                                        <TableCell align="left">
                                            <TableBody>
                                            {row.MolecularTargets.map(r => (
                                                <TableRow key={r.Name}>
                                                    <TableCell component="th" scope="row">
                                                      <Link to={`/moleculartargetdetail/${r.FID_S}`} >{r.Name}</Link>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                            </TableBody>
                                        </TableCell>
                                        <TableCell align="left">
                                            <TableBody>
                                            {row.ClinicalTrials.map(r => (
                                                <TableRow key={r.Name}>
                                                    <TableCell component="th" scope="row">
                                                      <Link to={`/clinicaltrialdetail/${r.FID_S}`} >{r.Name}</Link>
                                                    </TableCell>
                                                    <TableCell component="th" scope="row">
                                                      <TableBody>
                                                        {r.Diseases.map(n => (
                                                            <TableRow key={n.Name}>
                                                                <TableCell component="th" scope="row">
                                                                  <Link to={`/moleculartargetdetail/${n.FID_S}`} >{n.Name}</Link>
                                                                </TableCell>
                                                            </TableRow>
                                                        ))}
                                                        </TableBody>
                                                    </TableCell>
                                                </TableRow>                                                
                                            ))}
                                            </TableBody>
                                        </TableCell>
                                    </TableRow>
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
              Company Details
            </Typography>
          </AppBar>
          <Paper elevation={3}>
              No Company Details available for display!
          </Paper>
        </Container>
    );
}
}

  
export default CompanyPipeline;