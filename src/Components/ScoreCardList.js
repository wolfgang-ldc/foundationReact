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

const GET_SCORECARD = gql`
  query moleculesQuery(
    $first: Int
    $orderBy: [ScoreCardSort]
    $filter: ScoreCardWhere
  ) {
    scoreCards(
      where: $filter
      options: {limit: $first, sort: $orderBy}
  ) {
      FID
      Name
      NewSynonyms
      InvestmentStatus
      Description
      HomePage
      Type
      Downside
      DownsideRisk
      Upside
      UpsideRisk
      Shares
      CurrentPrice
      PreviousPrice
      PercentDifference
      Portfolio
      NextEvaluation
      Competition
      Sector
      Earnings
      Finances
      CashAtHand
      OverallScore
    }
  }
  `

function ScoreCardList (props) {
    const { classes } = props
    const [order, setOrder] = React.useState('DESC')
    const [orderBy, setOrderBy] = React.useState('OverallScore')
    const [page] = React.useState(0)
    const [rowsPerPage] = React.useState(100)
    const [filterState, setFilterState] = React.useState({ usernameFilter: '' })

    const getFilter = () => {
        return filterState.usernameFilter.length > 0
          ? { Name_CONTAINS: filterState.usernameFilter }
          : {}
      }

    
    const { loading, data, error } = useQuery(GET_SCORECARD, {
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
              ScoreCard Listing
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
                  <TableCell>
                        Score
                  </TableCell>
                  <TableCell
                    key="OverallScore"
                    sortDirection={orderBy === 'OverallScore' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'OverallScore'}
                        direction={order}
                        onClick={() => handleSortRequest('OverallScore')}
                      >
                        Score
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    key="InvestmentStatus"
                    sortDirection={orderBy === 'InvestmentStatus' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'InvestmentStatus'}
                        direction={order}
                        onClick={() => handleSortRequest('InvestmentStatus')}
                      >
                        Status
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
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
                  </TableCell>
                  <TableCell
                    key="Shares"
                    sortDirection={orderBy === 'Shares' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'Shares'}
                        direction={order}
                        onClick={() => handleSortRequest('Shares')}
                      >
                        Shares
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    key="Upside"
                    sortDirection={orderBy === 'Upside' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'Upside'}
                        direction={order}
                        onClick={() => handleSortRequest('Upside')}
                      >
                        Upside
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    key="UpsideRisk"
                    sortDirection={orderBy === 'UpsideRisk' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'UpsideRisk'}
                        direction={order}
                        onClick={() => handleSortRequest('UpsideRisk')}
                      >
                        UpsideRisk
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    key="Downside"
                    sortDirection={orderBy === 'Downside' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'Downside'}
                        direction={order}
                        onClick={() => handleSortRequest('Downside')}
                      >
                        Downside
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    key="DownsideRisk"
                    sortDirection={orderBy === 'DownsideRisk' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'DownsideRisk'}
                        direction={order}
                        onClick={() => handleSortRequest('DownsideRisk')}
                      >
                        DownsideRisk
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    key="Portfolio"
                    sortDirection={orderBy === 'Portfolio' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'Portfolio'}
                        direction={order}
                        onClick={() => handleSortRequest('Portfolio')}
                      >
                        Portfolio
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    key="Sector"
                    sortDirection={orderBy === 'Sector' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'Sector'}
                        direction={order}
                        onClick={() => handleSortRequest('Sector')}
                      >
                        Sector
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    key="PercentDifference"
                    sortDirection={orderBy === 'PercentDifference' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'PercentDifference'}
                        direction={order}
                        onClick={() => handleSortRequest('PercentDifference')}
                      >
                        Difference
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    key="CurrentPrice"
                    sortDirection={orderBy === 'CurrentPrice' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'CurrentPrice'}
                        direction={order}
                        onClick={() => handleSortRequest('CurrentPrice')}
                      >
                        Current
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    key="PreviousPrice"
                    sortDirection={orderBy === 'PreviousPrice' ? order : false}
                  >
                    <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === 'PreviousPrice'}
                        direction={order}
                        onClick={() => handleSortRequest('PreviousPrice')}
                      >
                        Previous
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.scoreCards.map((n) => {
                  return (
                    <TableRow key={n.FID}>
                      <TableCell>
                        {n.FID}
                      </TableCell>   
                      <TableCell component="th" scope="row" onClick={() => handleDeepLink(n.Name)}>
                        {n.HomePage === "" ? "" : <a href={n.HomePage} target="_blank" rel="noopener noreferrer">{n.Name}</a>}

                      </TableCell>
                      <TableCell>
                        <p>Score</p>
                        <meter value={n.OverallScore} min="0" max="12" optimum="10" low="4" high="8"></meter>
                      </TableCell>
                      <TableCell>{n.OverallScore}</TableCell>
                      <TableCell>{n.InvestmentStatus}</TableCell>
                      <TableCell>{n.NewSynonyms}</TableCell>
                      <TableCell>{n.Shares}</TableCell>
                      <TableCell>{n.Upside}</TableCell>
                      <TableCell>{n.UpsideRisk}</TableCell>
                      <TableCell>{n.Downside}</TableCell>
                      <TableCell>{n.DownsideRisk}</TableCell>
                      <TableCell>{n.Portfolio}</TableCell>
                      <TableCell>{n.Sector}</TableCell>
                      <TableCell>{n.PercentDifference}</TableCell>
                      <TableCell>{n.CurrentPrice}</TableCell>
                      <TableCell>{n.PreviousPrice}</TableCell>
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

export default ScoreCardList;