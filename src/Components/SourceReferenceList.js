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
import { withStyles } from '@material-ui/core/styles'

import { useQuery, gql } from '@apollo/client';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
      maxWidth: 700,
      marginTop: theme.spacing(3),
      overflowX: 'auto',
      margin: 'auto',
    },
    table: {
      minWidth: 700,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      minWidth: 300,
    },
  })

const GET_SOURCE_REFERENCE = gql`
  query referenceQuery(
    $first: Int
    $orderBy: [SourceReferenceSort]
    $filter: SourceReferenceWhere
  ) {
    sourceReferences(
      where: $filter
      options:{ limit: $first, sort: $orderBy }
      ) {
      FID
      Name
      Description
      HomePage
      CreationDate
    }
  }
  `

function SourceReferenceList (props) {
    const { classes } = props
    const [order, setOrder] = React.useState('DESC')
    const [orderBy, setOrderBy] = React.useState('CreationDate')
    const [page] = React.useState(0)
    const [rowsPerPage] = React.useState(10)
    const [filterState, setFilterState] = React.useState({ usernameFilter: '' })

    const getFilter = () => {
        return filterState.usernameFilter.length > 0
          ? { Name_CONTAINS: filterState.usernameFilter }
          : {}
      }

    
    const { loading, data, error } = useQuery(GET_SOURCE_REFERENCE, {
        variables: {
          first: rowsPerPage,
          orderBy: { [orderBy]: order },
          filter: getFilter(),
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
    
      var clickedLink = "";
    
      const handleDeepLink = (company) => {
        console.log("Clicked on " + company);
        clickedLink = company;
      }

      return (
        <div>
        <AppBar position="static">
          <Typography variant="h6" >
              Source Reference Listing
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
            />
          {loading && !error && <p>Loading...</p>}
          {error && !loading && <p>Error</p>}
          {data && !loading && !error && (
            <Table >
              <TableHead>
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
                    key="HomePage"
                    sortDirection={orderBy === 'HomePage' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'HomePage'}
                        direction={order}
                        onClick={() => handleSortRequest('imHomePageage')}
                      >
                        HomePage
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
                  <TableCell>CreationDate</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.sourceReferences.map((n) => {
                  var Bloom = 'neo4j://graphapps/neo4j-bloom/?perspective=FoundationBiology&search=Landscape%20for%20SourceReference%20by%20' + n.FID + '&run=true'
                  return (
                    <TableRow key={n.FID}>
                      <TableCell component="th" scope="row">
                        <a href={Bloom} target="_blank" rel="noopener noreferrer">
                        <img alt="No Logo available" height="25" width="25" className="image" src="http://localhost/images/bloom"/>
                        </a>
                      </TableCell>
                      <TableCell>
                        {n.FID}
                      </TableCell>
                      <TableCell>
                      {n.HomePage === "" ? "" : <a href={n.HomePage} target="_blank" rel="noopener noreferrer">
                        <img alt="WebLink" height="25" width="25" className="image" src="http://localhost/images/weblink"/></a>}
                      </TableCell>
                      <TableCell component="th" scope="row" onClick={() => handleDeepLink(n.Name)}>
                        <Link to={`/sourcereferencedetail/${n.FID}`} >{n.Name}</Link>
                      </TableCell>
                      <TableCell>
                      {n.CreationDate}
                      </TableCell>
                      <TableCell>
                        {n.Description}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          )}
        </Paper>
        </div>
      )
}

export default SourceReferenceList;