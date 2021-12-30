import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import CompanyClassDetailView from './CompanyClassDetailView'

  const GET_COMPANY_CLASS_DETAIL = gql`
  query companyClassDetail(
    $filter: CompanyClassWhere
  ) {
    companyClasses(
      where: $filter
      ) {
        FID
        FID_S
        Name
        AlternateNames
        Description
        Companies{
          FID_S
          Name
          Description
          FinanceStatus
          ScoreCards{
              CreationDate
              OverallScore
          }
        }
      }
  }
`

function CompanyClassDetail() {
  let params = useParams();
  const { loading, data, error } = useQuery(GET_COMPANY_CLASS_DETAIL, {
    variables: {
      filter: { FID_S : parseInt(params.id) },
    },
  })

        if(params.id !== ":id"){
          return(
            <div>
              {loading && !error && <p>Loading...</p>}
              {error && !loading && <p>Error</p>}
              {data && !loading && !error && (
                data.companyClasses.map(row => {
                  return ( 
                    <div>
                          <CompanyClassDetailView 
                          key={row.FID} 
                          FID={row.FID}
                          FID_S={row.FID_S}
                          Name={row.Name} 
                          AlternateNames={row.AlternateNames}
                          Description={row.Description} 
                          Companies={row.Companies}
                          ScoreCards={row.ScoreCards}
                          HomePage = ""
                          />
                      </div>
                  )
              }))}
            </div>
            )
        }
        else{
            return (
                <Container maxWidth="lg">
                  <AppBar position="static">
                    <Typography variant="h6" >
                      Company Class Details
                    </Typography>
                  </AppBar>
                  <Paper elevation={3}>
                      No Company Class Details available for display!
                  </Paper>
                </Container>
            );
        }
}

export default CompanyClassDetail;