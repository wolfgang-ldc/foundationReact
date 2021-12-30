import React from 'react'
import { useQuery, gql } from '@apollo/client';

import SummarySourceReferenceDetail from './SummarySourceReferenceDetail';

const GET_SOURCE_REFERENCE = gql`
  query sourceReferenceQuery(
    $first: Int
    $offset: Int
    $orderBy: [SourceReferenceSort]
    $filter: SourceReferenceWhere
  ) {
    sourceReferences(
      where:$filter
      options: {limit: $first, skip: $offset, sort: $orderBy}
    ) {
      FID
      Name
      Description
      HomePage
      CreationDate
      Items{
        FID_S
        Name
        Type
      }
    }
  }
  `

function SummarySourceReference (props) {
    //const { classes } = props
    const [order, setOrder] = React.useState('ASC')
    const [orderBy, setOrderBy] = React.useState('Name')
    const [page] = React.useState(0)
    const [rowsPerPage] = React.useState(100)
    const [filterState, setFilterState] = React.useState({ usernameFilter: [props.DateRangeArray3[0].Name,props.DateRangeArray3[1].Name,props.DateRangeArray3[2].Name,props.DateRangeArray3[3].Name,props.DateRangeArray3[4].Name,props.DateRangeArray3[5].Name,props.DateRangeArray3[6].Name] })

    
    const { loading, data, error } = useQuery(GET_SOURCE_REFERENCE, {
        variables: {
          first: rowsPerPage,
          offset: rowsPerPage * page,
          orderBy: { [orderBy]: order },
          filter: {CreationDate_IN: filterState.usernameFilter}
        },
      })

      return (
          <div>
          {loading && !error && <p>Loading...</p>}
          {error && !loading && <p>Error</p>}
          {data && !loading && !error &&  (
            <SummarySourceReferenceDetail SourceReferences={data.sourceReferences} />    
          )}
          </div>
      )
    
}

export default SummarySourceReference;