import React from 'react'
import { useQuery, gql } from '@apollo/client';

import SummaryCompanyDetail from './SummaryCompanyDetail';

const GET_COMPANIES = gql`
  query companyQuery(
    $first: Int
    $offset: Int
    $orderBy: [CompanySort]
    $filter: CompanyWhere
  ) {
    companies(
      where:$filter
      options: {limit: $first, skip: $offset, sort: $orderBy}
      ) {
      FID
      FID_S
      Name
      Description
      CreationDate
      FinanceStatus
      FoundationYear
      HomePage
      LinkedIn
      Twitter
      Type
      image
      Locations{
        Name
      }
    }
  }
  `

function SummaryCompany (props) {
    //const { classes } = props
    const [order, setOrder] = React.useState('ASC')
    const [orderBy, setOrderBy] = React.useState('Name')
    const [page] = React.useState(0)
    const [rowsPerPage] = React.useState(100)
    const [filterState, setFilterState] = React.useState({ usernameFilter: [props.DateRangeArray4[0].Name,props.DateRangeArray4[1].Name,props.DateRangeArray4[2].Name,props.DateRangeArray4[3].Name,props.DateRangeArray4[4].Name,props.DateRangeArray4[5].Name,props.DateRangeArray4[6].Name] })

    
    const { loading, data, error } = useQuery(GET_COMPANIES, {
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
            <SummaryCompanyDetail Companies={data.companies} />    
          )}
          </div>
      )
    
}

export default SummaryCompany;