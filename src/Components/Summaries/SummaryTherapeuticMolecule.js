import React from 'react'
import { useQuery, gql } from '@apollo/client';

import SummaryTherapeuticMoleculeDetail from './SummaryTherapeuticMoleculeDetail';

const GET_THERAPEUTIC_MOLECULE = gql`
  query therapeuticMoleculeQuery(
    $first: Int
    $offset: Int
    $orderBy: [TherapeuticMoleculeSort]
    $filter: TherapeuticMoleculeWhere
  ) {
    therapeuticMolecules(
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
      Companies{
        FID_S
        Name
      }
      DevelopmentStages{
        Name
      }
      Modalities{
        Name
      }
      MolecularTargets{
        FID_S
        Name
      }
      Diseases{
        Name
      }
    }
  }
  `

function SummaryTherapeuticMolecule (props) {
    //const { classes } = props
    const [order, setOrder] = React.useState('ASC')
    const [orderBy, setOrderBy] = React.useState('Name')
    const [page] = React.useState(0)
    const [rowsPerPage] = React.useState(100)
    const [filterState, setFilterState] = React.useState({ usernameFilter: [props.DateRangeArray5[0].Name,props.DateRangeArray5[1].Name,props.DateRangeArray5[2].Name,props.DateRangeArray5[3].Name,props.DateRangeArray5[4].Name,props.DateRangeArray5[5].Name,props.DateRangeArray5[6].Name] })

    
    const { loading, data, error } = useQuery(GET_THERAPEUTIC_MOLECULE, {
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
            <SummaryTherapeuticMoleculeDetail TherapeuticMolecules={data.therapeuticMolecules} />    
          )}
          </div>
      )
    
}

export default SummaryTherapeuticMolecule;