import React from 'react'
import { useQuery, gql } from '@apollo/client';

import SummaryMolecularTargetDetail from './SummaryMolecularTargetDetail';

const GET_MOLECULAR_TARGET = gql`
  query molecularTargetQuery(
    $first: Int
    $offset: Int
    $orderBy: [MolecularTargetSort]
    $filter: MolecularTargetWhere
  ) {
    molecularTargets(
      where:$filter
      options: {limit: $first, skip: $offset, sort: $orderBy}
    ) {
      FID
      FID_S
      Name
      AlternateNames
      Description
      CreationDate
      HomePage
      Type
    }
  }
  `

function SummaryMolecularTarget (props) {
    //const { classes } = props
    const [order, setOrder] = React.useState('ASC')
    const [orderBy, setOrderBy] = React.useState('Name')
    const [page] = React.useState(0)
    const [rowsPerPage] = React.useState(100)
    const [filterState, setFilterState] = React.useState({ usernameFilter: [props.DateRangeArray6[0].Name,props.DateRangeArray6[1].Name,props.DateRangeArray6[2].Name,props.DateRangeArray6[3].Name,props.DateRangeArray6[4].Name,props.DateRangeArray6[5].Name,props.DateRangeArray6[6].Name] })

    
    const { loading, data, error } = useQuery(GET_MOLECULAR_TARGET, {
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
          {data && !loading && !error && (
            <SummaryMolecularTargetDetail MolecularTargets={data.molecularTargets} />    
          )}
          </div>
      )
    
}

export default SummaryMolecularTarget;