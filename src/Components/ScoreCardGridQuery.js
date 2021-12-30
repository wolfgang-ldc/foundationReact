import React from 'react'

import {
    Paper,
    TextField,
  } from '@material-ui/core'


import { useQuery, gql } from '@apollo/client';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import ScoreCardGridView from './ScoreCardGridView'

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

function ScoreCardGridQuery (props) {
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
            <ScoreCardGridView ScoreCardList={data.scoreCards}/>
          )}
        </Paper>
        </div>
      )
}

export default ScoreCardGridQuery;