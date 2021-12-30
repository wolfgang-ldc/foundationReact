import React from 'react'
import { useQuery, gql } from '@apollo/client';

import StatisticsCoreView from './StatisticsCoreView'

const GET_DATA_QUERY = gql`
  {
    itemCountByCoreTypes {
        coreType
        coreCount
        }
  }
`

function StatisticsCoreQuery() {  

    const { loading, error, data } = useQuery(GET_DATA_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <div>
        <StatisticsCoreView CoreStats={data.itemCountByCoreTypes}/>
    </div>
  )       
}

export default StatisticsCoreQuery;