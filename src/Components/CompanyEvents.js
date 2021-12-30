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
  
const GET_COMPANY_EVENTS = gql`
query companyEvents(
  $substring:CompanyWhere)
{
  companies(
    where:$substring
    ) 
  {
    Name
    Events{
      FID
      FID_S
      Name
      Description
      Type
      HomePage
      EventDate
      Companies{
          FID_S
          Name
      }
      Items{
          FID_S
          Name
      }
    }
  }
}
`

function CompanyEvents(props) {
  const classes = useStyles();
console.log("props.FID_S: "+props.FID_S)
  const [order, setOrder] = React.useState('DESC')
  const [orderBy, setOrderBy] = React.useState('EventDate')
  
  const handleSortRequest = (property) => {
  const newOrderBy = property
    let newOrder = 'DESC'

    if (orderBy === property && order === 'DESC') {
      newOrder = 'ASC'
    }

    setOrder(newOrder)
    setOrderBy(newOrderBy)
  }

  const { loading, data, error } = useQuery(GET_COMPANY_EVENTS, {
    variables: {
      substring: {FID_S: parseInt(props.FID_S)} ,
    },
  })

  if(props.FID_S !== 0){
    return(
      <div>
      {loading && !error && <p>Loading...</p>}
        {error && !loading && <p>Error</p>}
        {data && !loading && !error && (
              <React.Fragment className={classes.root}>
              <Container maxWidth="lg">
                      <TableContainer component={Paper} className={classes.container}>
                          <Table aria-label="simple table">
                              <TableHead stickyHeader aria-label="sticky table">
                                  <StyledTableRow>
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
                                            ID
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
                                        key="EventDate"
                                        sortDirection={orderBy === 'EventDate' ? order : false}
                                      >
                                        <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                                          <TableSortLabel
                                            active={orderBy === 'EventDate'}
                                            direction={order}
                                            onClick={() => handleSortRequest('EventDate')}
                                          >
                                            EventDate
                                          </TableSortLabel>
                                        </Tooltip>
                                      </StyledTableCell>
                                      <StyledTableCell align="left">Companies</StyledTableCell>
                                      <StyledTableCell
                                        key="Type"
                                        sortDirection={orderBy === 'Type' ? order : false}
                                      >
                                        <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                                          <TableSortLabel
                                            active={orderBy === 'Type'}
                                            direction={order}
                                            onClick={() => handleSortRequest('Type')}
                                          >
                                            Type
                                          </TableSortLabel>
                                        </Tooltip>
                                      </StyledTableCell>
                                      <StyledTableCell align="left">Items</StyledTableCell>
                                  </StyledTableRow>
                              </TableHead>
                              <TableBody>
                                  {data.companies[0].Events.map(row => (
                                  <StyledTableRow key={row.FID}>
                                      <StyledTableCell component="th" scope="row">
                                          {row.FID}
                                      </StyledTableCell>
                                      <StyledTableCell align="left">
                                          {row.HomePage === "" ? "" : <a href={row.HomePage} target="_blank" rel="noopener noreferrer">{row.Name}</a>}
                                      </StyledTableCell>
                                      <StyledTableCell align="left">
                                          {row.EventDate}
                                      </StyledTableCell>
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
                                          {row.Type}
                                      </StyledTableCell>
                                      <StyledTableCell align="left">
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

  
export default CompanyEvents;