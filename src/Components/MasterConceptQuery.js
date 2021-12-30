import React from 'react'
import { useQuery, gql } from '@apollo/client';

import MasterConceptView from './MasterConceptView'


const GET_DATA = gql`
{
    itemCount{
        type 
        count
        status
    }
}
`
function MasterConceptQuery() { 

  const { loading, data, error } = useQuery(GET_DATA, {
  })

  return(
    <div>
    {loading && !error && <p>Loading...</p>}
      {error && !loading && <p>Error</p>}
      {data && !loading && !error && (
            <MasterConceptView MasterConcepts={data.itemCount}/>  
      )}
    </div>
  )
}
export default MasterConceptQuery;