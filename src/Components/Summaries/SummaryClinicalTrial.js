import React from 'react'
import { useQuery, gql } from '@apollo/client';

import SummaryClinicalTrialDetail from './SummaryClinicalTrialDetail';

const GET_CLINICAL_TRIAL = gql`
  query clinicalTrialQuery(
    $first: Int
    $offset: Int
    $orderBy: [ClinicalTrialSort]
    $filter: ClinicalTrialWhere
  ) {
    clinicalTrials(
      where:$filter
      options: {limit: $first, skip: $offset, sort: $orderBy}
    ) {
      FID
      FID_S
      Name
      Description
      Recruitment
      Enrollment
      Companies{
          FID_S
          Name
      }
      DevelopmentStages{
          Name
      }
      Diseases{
          Name
      }
      TherapeuticMolecules{
          FID_S
          Name
          MolecularTargets{
            FID_S
            Name
          }
      }
    }
  }
  `

function SummaryClinicalTrial (props) {
    //const { classes } = props
    const [order, setOrder] = React.useState('ASC')
    const [orderBy, setOrderBy] = React.useState('Name')
    const [page] = React.useState(0)
    const [rowsPerPage] = React.useState(100)
    const [filterState, setFilterState] = React.useState({ usernameFilter: [props.DateRangeArray[0].Name,props.DateRangeArray[1].Name,props.DateRangeArray[2].Name,props.DateRangeArray[3].Name,props.DateRangeArray[4].Name,props.DateRangeArray[5].Name,props.DateRangeArray[6].Name] })

    
    const { loading, data, error } = useQuery(GET_CLINICAL_TRIAL, {
        variables: {
          first: rowsPerPage,
          offset: rowsPerPage * page,
          orderBy: { [orderBy]: order },
          filter: {FirstPostedDate_IN: filterState.usernameFilter}
        },
      })

      return (
          <div>
          {loading && !error && <p>Loading...</p>}
          {error && !loading && <p>Error</p>}
          {data && !loading && !error &&  (
            <SummaryClinicalTrialDetail ClinicalTrials={data.clinicalTrials} />    
          )}

          </div>
      )
    
}

export default SummaryClinicalTrial;