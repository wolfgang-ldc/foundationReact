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
import { useQuery, gql } from '@apollo/client';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';


const GET_MOLECULE = gql`
  query biologicalProcessQuery(
    $first: Int
    $offset: Int
    $orderBy: [BiologicalProcessSort]
    $filter: BiologicalProcessWhere
  ) {
    biologicalProcesses(
        where:$filter
        options:{ limit: $first, skip: $offset, sort: $orderBy }
    ) {
      FID
      FID_S
      Name
      AlternateNames
      Description
      HomePage
      Type
      CreationDate
    }
  }
  `

function BiologicalProcessList (props) {
    const [order, setOrder] = React.useState('ASC')
    const [orderBy, setOrderBy] = React.useState('Name')
    const [page] = React.useState(0)
    const [rowsPerPage] = React.useState(10)
    const [filterState, setFilterState] = React.useState({ usernameFilter: '' })

    const getFilter = () => {
        return filterState.usernameFilter.length > 0
          ? { AlternateNames_CONTAINS: filterState.usernameFilter }
          : {}
      }

    
    const { loading, data, error } = useQuery(GET_MOLECULE, {
        variables: {
          first: rowsPerPage,
          offset: rowsPerPage * page,
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

      return (
        <div>
        <AppBar position="static">
          <Typography variant="h6" >
              Biological Process Listing
          </Typography>
        </AppBar>
        <Paper >
          <TextField
              id="search"
              label="AlternateNames Contains"
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
                  <TableCell
                    key="AlternateNames"
                    sortDirection={orderBy === 'AlternateNames' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'AlternateNames'}
                        direction={order}
                        onClick={() => handleSortRequest('AlternateNames')}
                      >
                        AlternateNames
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    Description
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.biologicalProcesses.map((n) => {
                  return (
                    <TableRow key={n.FID}>
                      <TableCell>
                        {n.FID}
                      </TableCell>
                      <TableCell>
                      {n.HomePage === "" ? "" : <a href={n.HomePage} target="_blank" rel="noopener noreferrer">
                        <img alt="WebLink" height="25" width="25" className="image" src="http://localhost/images/weblink"/></a>}
                      </TableCell>
                      <TableCell component="th" scope="row" >
                        <Link to={`/biologicalprocessdetail/${n.FID_S}`} >{n.Name}</Link>
                      </TableCell>
                      <TableCell>
                      {n.AlternateNames}
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

export default BiologicalProcessList;