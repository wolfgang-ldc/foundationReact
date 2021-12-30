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
  

const GET_COMPANY_BY_BIOSTRUCTURE = gql`
  query companyByBiostructureQuery(
    $substring: String
  ) {
    companiesByBioStructure(
      substring: $substring
      ) {
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
      Locations{
          Name
      }
      BioStructures{
          Name
      }
    }
  }
  `

function CompanyByBioStructureList (props) {
    //const { classes } = props
    const [order, setOrder] = React.useState('ASC')
    const [orderBy, setOrderBy] = React.useState('Name')
    //const [page] = React.useState(0)
    const [filterState, setFilterState] = React.useState({ usernameFilter: 'a' })

    const classes = useStyles();

    const getFilter = () => {
        return filterState.usernameFilter.length > 0
          ? filterState.usernameFilter 
          : {}
      }

    
    const { loading, data, error } = useQuery(GET_COMPANY_BY_BIOSTRUCTURE, {
        variables: {
          substring: getFilter(),
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
              Companies by Biological Structure Listing
          </Typography>
        </AppBar>
        <Paper >
        <TextField
            id="search"
            label="Biological Structure Name Contains"
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
                    width="50"
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
                    key="LinkedIn"
                  >
                    <img alt="LinkedIn" height="25" width="25" className="image" src="http://localhost/images/LinkedIn"/>
                  </StyledTableCell>
                  <StyledTableCell
                    key="Twitter"
                  >
                    <img alt="Twitter" height="25" width="25" className="image" src="http://localhost/images/Twitter"/>
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
                    key="BioStructure"
                  >
                    BioStructure
                  </StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {data.companiesByBioStructure.map((n) => {
                  return (
                    <StyledTableRow key={n.FID}>
                      <StyledTableCell>
                        <Link to={`/companysummary/${n.Name}`} >{n.FID}</Link>
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
                      {n.FinanceStatus === "PUBLIC" ? <a href={n.YahooFinance} target="_blank" rel="noopener noreferrer">{n.FinanceStatus}</a> : n.FinanceStatus}                     
                      </StyledTableCell>
                      <StyledTableCell>
                      {n.NewSynonyms === "" ? "" : <a href={n.YahooFinance} target="_blank" rel="noopener noreferrer">{n.NewSynonyms}</a>}                     
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
                        {n.Locations[0].Name}
                      </StyledTableCell>
                      <StyledTableCell>
                        {n.FoundationYear}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <TableBody>
                        {n.BioStructures.map(r => (
                            <TableRow key={r.Name}>
                                <TableCell component="th" scope="row">
                                    {r.Name}
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
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

export default CompanyByBioStructureList;