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
  query therapeuticProductQuery(
    $first: Int
    $offset: Int
    $orderBy: [TherapeuticProductSort]
    $filter: TherapeuticProductWhere
  ) {
    therapeuticProducts(
        where:$filter
        options:{ limit: $first, skip: $offset, sort: $orderBy }
    ) {
      FID
      FID_S
      Name
      Description
      HomePage
      Type
      CreationDate
      image
      Companies{
        FID_S
        Name
      }
      Molecules{
        FID_S
        Name
      }
      ProductSales{
        Sales_US
        Sales_ROW
        Earnings{
          Name
        }
      }
    }
  }
  `

function TherapeuticProductList (props) {
    //const { classes } = props
    const [order, setOrder] = React.useState('ASC')
    const [orderBy, setOrderBy] = React.useState('Name')
    const [page] = React.useState(0)
    const [rowsPerPage] = React.useState(50)
    const [filterState, setFilterState] = React.useState({ usernameFilter: '' })

    const classes = useStyles();

    const getFilter = () => {
        return filterState.usernameFilter.length > 0
          ? { Name_CONTAINS: filterState.usernameFilter }
          : {}
      }

    
    const { loading, data, error } = useQuery(GET_USER, {
        variables: {
          first: rowsPerPage,
          offset: rowsPerPage * page,
          orderBy: { [orderBy]: order },
          filter: getFilter(),
          //filter: "Amgen"
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
              Therapeutic Product Listing
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
                    key="Description"
                  >
                    Description
                  </StyledTableCell>
                  <StyledTableCell
                    key="LinkedIn"
                  >
                    CreationDate
                  </StyledTableCell>
                  <StyledTableCell
                    key="Twitter"
                  >
                    Companies
                  </StyledTableCell>
                  <StyledTableCell
                    key="Locations"
                  >
                    Molecules
                  </StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {data.therapeuticProducts.map((n) => {
                  return (
                    <StyledTableRow key={n.FID}>
                      <StyledTableCell>
                        {n.FID}
                      </StyledTableCell>
                      <StyledTableCell>
                        <a href={n.HomePage} target="_blank" rel="noopener noreferrer">
                          <img alt="No Logo available" height="50" width="120" className="image" src={n.image}/>
                        </a>
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        <Link to={`/therapeuticproductdetail/${n.FID_S}`} >{n.Name}</Link>
                      </StyledTableCell>
                      <StyledTableCell>
                        {n.Description}
                      </StyledTableCell>
                      <StyledTableCell>
                        {n.CreationDate}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                            <TableBody>
                                {n.Companies.map(r => (
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
                                {n.Molecules.map(r => (
                                    <TableRow key={r.Name}>
                                        <TableCell component="th" scope="row">
                                            <Link to={`/therapeuticmoleculedetail/${r.FID_S}`} >{r.Name}</Link>
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

export default TherapeuticProductList;