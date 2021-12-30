import React from 'react'
import { useQuery, gql } from '@apollo/client';

import SummaryEventDetail from './SummaryEventDetail';

const GET_EVENT = gql`
  query eventQuery(
    $first: Int
    $offset: Int
    $orderBy: [EventSort]
    $filter: EventWhere
  ) {
    events(
      where:$filter
      options: {limit: $first, skip: $offset, sort: $orderBy}
    ) {
      FID
      Name
      Description
      EventDate
      HomePage
      Type
      Companies{
        FID_S
        Name
      }
      EventTypes{
        Name
      }
      Items{
        FID_S
        Name
      }
    }
  }
  `

function SummaryEvent (props) {
    //const { classes } = props
    const [order, setOrder] = React.useState('ASC')
    const [orderBy, setOrderBy] = React.useState('Name')
    const [page] = React.useState(0)
    const [rowsPerPage] = React.useState(100)
    const [filterState, setFilterState] = React.useState({ usernameFilter: [props.DateRangeArray2[0].Name,props.DateRangeArray2[1].Name,props.DateRangeArray2[2].Name,props.DateRangeArray2[3].Name,props.DateRangeArray2[4].Name,props.DateRangeArray2[5].Name,props.DateRangeArray2[6].Name] })

    
    const { loading, data, error } = useQuery(GET_EVENT, {
        variables: {
          first: rowsPerPage,
          offset: rowsPerPage * page,
          orderBy: { [orderBy]: order },
          filter: {EventDate_IN: filterState.usernameFilter}
        },
      })

      return (
          <div>
          {loading && !error && <p>Loading...</p>}
          {error && !loading && <p>Error</p>}
          {data && !loading && !error && (
            <SummaryEventDetail Events={data.events} />    
          )}
          </div>
      )
    
}

export default SummaryEvent;