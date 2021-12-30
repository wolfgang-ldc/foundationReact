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
  

const GET_CLINICAL_TRIAL = gql`
  query clinicalTrialQuery(
    $first: Int
    $offset: Int
    $orderBy: [ClinicalTrialSort]
    $filter: ClinicalTrialWhere
  ) {
    clinicalTrials(
        where:$filter
        options:{ limit: $first, skip: $offset, sort: $orderBy }
    ) {
      FID
      FID_S
      Name
      Description
      Stage
      HomePage
      Recruitment
      Enrollment
      FirstPostedDate
      Companies{
          Name
          FID_S
      }
      Diseases{
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
      Events{
        FID_S
        Name
        EventDate
        HomePage
        Type
        EventOutcomes{
          Name
        }
        EventOutcomeTypes{
          Name
        }
      }
    }
  }
  `

function ClinicalTrialList (props) {
    //const { classes } = props
    const [order, setOrder] = React.useState('ASC')
    const [orderBy, setOrderBy] = React.useState('Name')
    const [page] = React.useState(0)
    const [rowsPerPage] = React.useState(10)
    const [filterState, setFilterState] = React.useState({ usernameFilter: '' })

    const classes = useStyles();

    const getFilter = () => {
        return filterState.usernameFilter.length > 0
          ? { Name_CONTAINS: filterState.usernameFilter }
          : {}
      }

    
    const { loading, data, error } = useQuery(GET_CLINICAL_TRIAL, {
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
              Clinical Trial Listing
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
            <TableContainer component={Paper} className={classes.container} >
            <Table stickyHeader aria-label="simple table">
              <TableHead aria-label="sticky table" color='blue'>
                <StyledTableRow>
                <StyledTableCell
                    key="Events"
                  >
                    Bloom
                  </StyledTableCell>
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
                    key="Description"
                  >
                    Description
                  </StyledTableCell>
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
                  <StyledTableCell
                    key="Companies"
                  >
                    Companies
                  </StyledTableCell>
                  <StyledTableCell
                    key="Molecules"
                  >
                    Molecules & Targets
                  </StyledTableCell>
                  <StyledTableCell
                    key="Diseases"
                  >
                    Diseases
                  </StyledTableCell>
                  <StyledTableCell
                    key="Events"
                  >
                    Events
                  </StyledTableCell>
                </StyledTableRow>               
              </TableHead>
              <TableBody>
                {data.clinicalTrials.map((n) => {
                  var Bloom = 'neo4j://graphapps/neo4j-bloom/?perspective=FoundationBiology&search=Landscape%20for%20Clinical%20Trial%20' + n.Name + '&run=true'
                  return (
                    <StyledTableRow key={n.FID}>
                      <StyledTableCell component="th" scope="row">
                        <a href={Bloom} target="_blank" rel="noopener noreferrer">
                        <img alt="No Logo available" height="25" width="25" className="image" src="http://localhost/images/bloom"/>
                        </a>
                      </StyledTableCell>
                      <StyledTableCell>
                      <a href={"https://clinicaltrials.gov/ct2/results?cond=&term=" + n.Name + "&cntry=&state=&city=&dist="} target="_blank" rel="noopener noreferrer">
                      <img alt="No Logo available" height="25" width="25" className="image" src="http://localhost/images/weblink"/>
                      </a>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Link to={`/clinicaltrialdetail/${n.FID_S}`} >{n.Name}</Link>
                      </StyledTableCell>
                      <StyledTableCell>
                        {n.Description}
                      </StyledTableCell>
                      <StyledTableCell>
                        {n.Stage}
                      </StyledTableCell>
                      <StyledTableCell>
                        {n.Recruitment}                     
                      </StyledTableCell>
                      <StyledTableCell>
                        {n.Enrollment}
                      </StyledTableCell>
                      <StyledTableCell>
                        {n.FirstPostedDate}
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
                        {n.TherapeuticMolecules.map(r => (
                            <TableRow key={r.Name}>
                                <TableCell component="th" scope="row">
                                    <Link to={`/therapeuticmoleculedetail/${r.FID_S}`} >{r.Name}</Link>
                                </TableCell>
                                <TableCell align="left">
                                    <TableBody>
                                    {r.MolecularTargets.map(z => (
                                        <TableRow key={z.FID_S}>
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
                    <StyledTableCell align="left">
                        <TableBody>
                        {n.Diseases.map(r => (
                            <TableRow key={r.Name}>
                                <TableCell component="th" scope="row">
                                    <Link to={`/diseasedetail/${r.FID_S}`} >{r.Name}</Link>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                        <TableBody>
                        {n.Events.map(r => (
                            <TableRow key={r.Name}>
                                <TableCell>{r.EventDate}</TableCell>
                                <TableCell component="th" scope="row">
                                    <a href={r.HomePage} target="_blank" rel="noopener noreferrer">{r.Name}</a>
                                </TableCell>
                                <TableCell>{r.Type}</TableCell>
                                <TableCell align="left">
                                  {r.EventOutcomes.map(x => (
                                    <TableRow key={x.FID}>
                                        <TableCell align="left">
                                            {x.Name}
                                        </TableCell>
                                    </TableRow>
                                  ))}
                                </TableCell>
                                <TableCell align="left">
                                  {r.EventOutcomeTypes.map(x => (
                                    <TableRow key={x.FID}>
                                        <TableCell align="left">
                                            {x.Name}
                                        </TableCell>
                                    </TableRow>
                                  ))}
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

export default ClinicalTrialList;