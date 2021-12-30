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
  } from '@material-ui/core'
import TableContainer from '@material-ui/core/TableContainer';
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';
import { useQuery, gql } from '@apollo/client';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import SearchBar from './SearchBar';

import ItemCounts from './ItemCounts_';

const useStyles = makeStyles({
    root: {
      width: '50%',
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
      fontSize: 12,
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
  query itemsByName(
    $substring: String
  ) {
    itemsByName(substring: $substring) {
      FID
      FID_S
      Name
      Description
      AlternateNames
      HomePage
      CreationDate
      Type
      image
    }
  }
  `

function ItemList (props) {
    //const { classes } = props
    const [order, setOrder] = React.useState('asc')
    const [orderBy, setOrderBy] = React.useState('Name')
    const [page] = React.useState(0)
    const [rowsPerPage] = React.useState(50)
    const [search, setSearch] = React.useState('Test');

    const classes = useStyles();


    const getFilter = () => {
      console.log("search is: " + search)
      return search.length > 0
        ? search
        : {}
      
    }
    
    const { loading, data, error } = useQuery(GET_USER, {
        variables: {
          first: rowsPerPage,
          offset: rowsPerPage * page,
          orderBy: orderBy + '_' + order,
          substring: getFilter(),
        },
      })


      const handleSortRequest = (property) => {
        const newOrderBy = property
        let newOrder = 'desc'
    
        if (orderBy === property && order === 'desc') {
          newOrder = 'asc'
        }
    
        setOrder(newOrder)
        setOrderBy(newOrderBy)
      }

      const onTermSubmit = term => {
        console.log("term is: " + term)
        setSearch(term);
        console.log("search is now: " + search)
    };

      return (
        <div>
        <AppBar position="static">
          <Typography variant="h6" >
              Item Listing
          </Typography>
        </AppBar>
        <Paper >
        <SearchBar onFormSubmit = {onTermSubmit}/>
          {loading && !error && <p>Loading...</p>}
          {error && !loading && <p>Error</p>}
          {data && !loading && !error && (
            <div>
            <ItemCounts 
            ItemList={data.itemsByName} SearchValue={search}
            />
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
                    key="AlternateName"
                    sortDirection={orderBy === 'AlternateNames' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'AlternateNames'}
                        direction={order}
                        onClick={() => handleSortRequest('AlternateName')}
                      >
                        AlternateNames
                      </TableSortLabel>
                    </Tooltip>
                  </StyledTableCell>
                  <StyledTableCell
                    key="Description" maxlength="100"
                  >
                    Description
                  </StyledTableCell>
                  <StyledTableCell
                    key="HomePage"
                  >
                    HomePage
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
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {data.itemsByName.map((n) => {
                  return (
                    <StyledTableRow key={n.FID}>
                      <StyledTableCell>
                        {n.FID}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {n.Type === "ClinicalTrial" ? <Link to={`/clinicaltrialdetail/${n.FID_S}`} >{n.Name}</Link> :
                        n.Type === "MolecularTarget" ? <Link to={`/moleculartargetdetail/${n.FID_S}`} >{n.Name}</Link> :
                        n.Type === "Organization:Company" ? <Link to={`/companysummary/${n.FID_S}`} >{n.Name}</Link> : 
                        n.Type === "Person" ? <Link to={`/itemdetail/${n.FID_S}`} >{n.Name}</Link> :
                        n.Type === "SourceReference" ? <Link to={`/sourcereferencedetail/${n.FID_S}`} >{n.Name}</Link> :
                        n.Type === "TherapeuticMolecule" ? <Link to={`/therapeuticmoleculedetail/${n.FID_S}`} >{n.Name}</Link> :
                        n.Type === "TherapeuticProduct" ? <Link to={`/therapeuticproductdetail/${n.FID_S}`} >{n.Name}</Link>: 
                        n.Name}
                      </StyledTableCell>                    
                      <StyledTableCell>
                      {n.AlternateNames}
                      </StyledTableCell>
                      <StyledTableCell>
                        {n.Description}
                      </StyledTableCell>
                      <StyledTableCell>
                      {n.HomePage === "" ? <img alt="HomePage" height="50" width="100" className="image" src="http://localhost/images/NoImage"/> : <a href={n.HomePage} target="_blank" rel="noopener noreferrer">
                        <img alt="HomePage" height="50" width="100" className="image" src={n.image === null ? "http://localhost/images/NoImage" : n.image}/></a> }
                      </StyledTableCell>
                      <StyledTableCell>
                        {n.CreationDate}
                      </StyledTableCell>
                      <StyledTableCell>
                        {n.Type}
                      </StyledTableCell>
                    </StyledTableRow>
                  )
                })}
              </TableBody>
            </Table>
            </TableContainer>
            </div>
          )}
        </Paper>
        </div>
      )
}

export default ItemList;