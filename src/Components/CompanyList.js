import React from 'react'
import {Link} from 'react-router-dom'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    Paper,
    TableSortLabel,
    TextField,
  } from '@material-ui/core'
import TableContainer from '@material-ui/core/TableContainer';
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';
import { useQuery, gql } from '@apollo/client';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 700,
      color: 'blue'
    },
    title: {
      flexGrow: 1,
    },
  });

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
  

const GET_USER = gql`
  query companyQuery(
    $first: Int
    $offset: Int
    $orderBy: [CompanySort]
    $filter: CompanyWhere)
  {
    companies(
        where:$filter
        options:{ limit: $first, skip: $offset, sort: $orderBy }
      )
   {
      FID
      FID_S
      Name
      Description
      FinanceStatus
      NewSynonyms
      HomePage
      YahooFinance
      image
      LinkedIn
      Twitter
      Type
      FoundationYear
      CreationDate
      Locations{
          Name
      }
    }
  }
  `

function CompanyList (props) {
    //const { classes } = props
    const [order, setOrder] = React.useState('DESC')
    const [orderBy, setOrderBy] = React.useState('CreationDate')
    const [page] = React.useState(0)
    const [rowsPerPage] = React.useState(50)
    const [filterState, setFilterState] = React.useState({ usernameFilter: '' })

    const classes = useStyles();

    const getFilter = () => {
        return filterState.usernameFilter.length > 0
          ? { AlternateNames_CONTAINS: filterState.usernameFilter }
          : {}
      }

    
    const { loading, data, error } = useQuery(GET_USER, {
        variables: {
          first: rowsPerPage,
          offset: rowsPerPage * page,
          orderBy: { [orderBy]: order },
          filter: getFilter()
        },
      })


      const handleSortRequest = (property) => {
        const newOrderBy = property
        let newOrder = 'DESC'
    
        if (orderBy === property && order === 'DESC') {
          newOrder = 'ASC'
        }
    
        setOrder(newOrder)
        setOrderBy(newOrderBy)
      }
    
      const handleFilterChange = (filterName) => (event) => {
        const val = event.target.value
    
        setFilterState((oldFilterState) => ({
          ...oldFilterState,
          [filterName]: val,
        }))
      }

      return (
        <div>
        <AppBar position="static">
          <Typography variant="h6" >
              Company Listing
          </Typography>
        </AppBar>
        <Paper >
        <TextField
            id="search"
            label="Name Contains"
            //className={classes.textField}
            value={filterState.usernameFilter}
            onChange={handleFilterChange('usernameFilter')}
            margin="normal"
            variant="outlined"
            type="text"
            //InputProps={{
              //className: classes.input,
            //}}
          />
          {loading && !error && <p>Loading...</p>}
          {error && !loading && <p>Error</p>}
          {data && !loading && !error && (
            <TableContainer component={Paper} className={classes.container} >
            <Table stickyHeader aria-label="simple table">
              <TableHead aria-label="sticky table" color='blue'>
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
                    key="LinkedIn"
                  >
                    Bloom
                  </StyledTableCell>
                  <StyledTableCell
                    key="image"
                    sortDirection={orderBy === 'image' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'image'}
                        direction={order}
                        onClick={() => handleSortRequest('image')}
                      >
                        Logo
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
                    key="FinanceStatus"
                    sortDirection={orderBy === 'FinanceStatus' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'FinanceStatus'}
                        direction={order}
                        onClick={() => handleSortRequest('FinanceStatus')}
                      >
                        FinanceStatus
                      </TableSortLabel>
                    </Tooltip>
                  </StyledTableCell>
                  <StyledTableCell
                    key="NewSynonyms"
                    sortDirection={orderBy === 'NewSynonyms' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'NewSynonyms'}
                        direction={order}
                        onClick={() => handleSortRequest('NewSynonyms')}
                      >
                        Ticker
                      </TableSortLabel>
                    </Tooltip>
                  </StyledTableCell>
                  <StyledTableCell
                    key="Description"
                  >
                    Description
                  </StyledTableCell>
                  <StyledTableCell
                    key="LinkedIn"
                  >
                    LinkedIn
                  </StyledTableCell>
                  <StyledTableCell
                    key="Twitter"
                  >
                    Twitter
                  </StyledTableCell>
                  <StyledTableCell
                    key="Locations"
                  >
                    Location
                  </StyledTableCell>
                  <StyledTableCell
                    key="FoundationYear"
                    sortDirection={orderBy === 'FoundationYear' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'FoundationYear'}
                        direction={order}
                        onClick={() => handleSortRequest('FoundationYear')}
                      >
                        FoundationYear
                      </TableSortLabel>
                    </Tooltip>
                  </StyledTableCell>
                  <StyledTableCell
                    key="CreationDate"
                    sortDirection={orderBy === 'CreationDate' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'CreationDate'}
                        direction={order}
                        onClick={() => handleSortRequest('CreationDate')}
                      >
                        CreationDate
                      </TableSortLabel>
                    </Tooltip>
                  </StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {data.companies.map((n) => {
                  var Bloom = 'neo4j://graphapps/neo4j-bloom/?perspective=FoundationBiology&search=Landscape%20for%20Company%20' + n.Name + '&run=true'
                  return (
                    <StyledTableRow key={n.FID}>
                      <StyledTableCell>
                        {n.FID}
                      </StyledTableCell>
                      <StyledTableCell>
                      <a href={Bloom} target="_blank" rel="noopener noreferrer"><img alt="Bloom" height="25" width="25" className="image" title="Bloom" src="http://localhost/images/bloom"/></a><br></br>
                      </StyledTableCell>
                      <StyledTableCell>
                        <a href={n.HomePage} target="_blank" rel="noopener noreferrer">
                          <img alt="No Logo available" height="50" width="120" className="image" src={n.image}/>
                        </a>
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                      <Link to={`/companysummary/${n.FID_S}`} >{n.Name}</Link>
                      </StyledTableCell>
                      <StyledTableCell>
                      {n.FinanceStatus === "PUBLIC" ? <a href={n.YahooFinance} target="_blank" rel="noopener noreferrer">{n.FinanceStatus} </a> : n.FinanceStatus}                     
                      </StyledTableCell>
                      <StyledTableCell>
                      {n.FinanceStatus === "PUBLIC" ? <a href={n.YahooFinance} target="_blank" rel="noopener noreferrer">{n.NewSynonyms}</a> : ""}                     
                      </StyledTableCell>
                      <StyledTableCell>
                        {n.Description}
                      </StyledTableCell>
                      <StyledTableCell>
                      {n.LinkedIn === "" ? "" : <a href={n.LinkedIn} target="_blank" rel="noopener noreferrer">
                        <img alt="LinkedIn" height="25" width="25" className="image" src="http://localhost/images/LinkedIn"/></a>}
                      </StyledTableCell>
                      <StyledTableCell>
                      {n.Twitter === "" ? "" : <a href={n.Twitter} target="_blank" rel="noopener noreferrer">
                        <img alt="Twitter" height="25" width="25" className="image" src="http://localhost/images/Twitter"/></a>}
                      </StyledTableCell>
                      <StyledTableCell>
                      {n.Locations[0].Name === null ? "No Location" : n.Locations[0].Name}        
                      </StyledTableCell>
                      <StyledTableCell>
                        {n.FoundationYear}
                      </StyledTableCell>
                      <StyledTableCell>
                        {n.CreationDate}
                      </StyledTableCell>
                    </StyledTableRow>
                  )
                })}
              </TableBody>
            </Table>
            </TableContainer>
          )}
        </Paper>
        </div>
      )
}

export default CompanyList;