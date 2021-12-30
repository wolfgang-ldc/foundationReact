import React from 'react'
import { useQuery, gql } from '@apollo/client';

import StatisticsView from './StatisticsView'

const GET_DATA_QUERY = gql`
  {
    itemCount {
        type
        count
        }
  }
`

function StatisticsQuery() {  

    const { loading, error, data } = useQuery(GET_DATA_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <div>
        <StatisticsView Stats={data.itemCount}/>
    </div>
  )       
}

export default StatisticsQuery;