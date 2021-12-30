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
import TableContainer from "@material-ui/core/TableContainer";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery, gql } from '@apollo/client';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  container: {
    maxHeight: 800
  }
});

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

const GET_PREDICTION = gql`
  query predictionQuery(
    $first: Int
    $orderBy: [PredictionSort]
    $filter: PredictionWhere
  ) {
    predictions(      
      where: $filter
      options:{ limit: $first, sort: $orderBy }
      ) {
      FID
      Name
      Description
      HomePage
      Type
      EventActualDate
      EventDate
      EventQuarter
      EventYear
      EventOutcome
      Stage
      Outcome{
        FID
        FID_S
        Name
      }
      ClinicalTrials{
        FID_S
        Name
      }
      Items{
        FID_S
        Name
      }
    }
  }
  `

function PredictionCalendar (props) {
    const classes = useStyles();
    //const { classes } = props
    const [order, setOrder] = React.useState('ASC')
    const [orderBy, setOrderBy] = React.useState('EventDate')
    const [page] = React.useState(0)
    const [rowsPerPage] = React.useState(200)
    const [filterState, setFilterState] = React.useState({ usernameFilter: '' })

    const getFilter = () => {
        return filterState.usernameFilter.length > 0
          ? { Name_CONTAINS: filterState.usernameFilter }
          : {}
      }

    
    const { loading, data, error } = useQuery(GET_PREDICTION, {
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
    
      var clickedLink = "";
    
      const handleDeepLink = (company) => {
        console.log("Clicked on " + company);
        clickedLink = company;
      }

      return (
        <div>
        <AppBar position="static">
          <Typography variant="h6" >
              Prediction Calendar
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
            
            <TableContainer className={classes.container}>
            <Table stickyHeader>
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
                    key="Description"
                    sortDirection={orderBy === 'Description' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'Description'}
                        direction={order}
                        onClick={() => handleSortRequest('Description')}
                      >
                        Description
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    key="EventOutcome"
                    sortDirection={orderBy === 'EventOutcome' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'EventOutcome'}
                        direction={order}
                        onClick={() => handleSortRequest('EventOutcome')}
                      >
                        Outcome
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    key="EventActualDate"
                    sortDirection={orderBy === 'EventActualDate' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'EventActualDate'}
                        direction={order}
                        onClick={() => handleSortRequest('EventActualDate')}
                      >
                        Actual Date
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    key="EventDate"
                    sortDirection={orderBy === 'EventDate' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'EventDate'}
                        direction={order}
                        onClick={() => handleSortRequest('EventDate')}
                      >
                        Planned Date
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    key="EventQuarter"
                    sortDirection={orderBy === 'EventQuarter' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'EventQuarter'}
                        direction={order}
                        onClick={() => handleSortRequest('EventQuarter')}
                      >
                        Planned Quarter
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    key="EventYear"
                    sortDirection={orderBy === 'EventYear' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'EventYear'}
                        direction={order}
                        onClick={() => handleSortRequest('EventYear')}
                      >
                        Planned Year
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
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
                  </TableCell>
                  <TableCell
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
                  </TableCell>
                  <TableCell>ClinicalTrial</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.predictions.map((n) => {
                  return (
                    <TableRow key={n.FID}>
                      <TableCell>
                        {n.FID}
                      </TableCell>   
                      <TableCell component="th" scope="row" onClick={() => handleDeepLink(n.Name)}>
                        {n.HomePage === "" ? n.Name : <a href={n.HomePage} target="_blank" rel="noopener noreferrer">{n.Name}</a>}
                      </TableCell>
                      <TableCell>
                        {n.Description}
                      </TableCell>
                      <TableCell align="left">
                        <TableBody>
                        {n.Outcome.map(r => (
                            <TableRow key={r.Name}>
                                <TableCell component="th" scope="row">
                                    {r.Name}
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                      </TableCell>
                      <TableCell>{n.EventActualDate}</TableCell>
                      <TableCell>{n.EventDate}</TableCell>
                      <TableCell>{n.EventQuarter}</TableCell>
                      <TableCell>{n.EventYear}</TableCell>
                      <TableCell>{n.Stage}</TableCell>
                      <TableCell>{n.Type}</TableCell>
                      <TableCell align="left">
                        <TableBody>
                        {n.ClinicalTrials.map(r => (
                            <TableRow key={r.Name}>
                                <TableCell component="th" scope="row">
                                  <Link to={`/clinicalTrialdetail/${r.FID_S}`} >{r.Name}</Link>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                      </TableCell>
                    </TableRow>
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

export default PredictionCalendar;