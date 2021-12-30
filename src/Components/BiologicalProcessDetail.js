import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import BiologicalProcessDetailView from './BiologicalProcessDetailView'

const GET_BIOLOGICAL_PROCESS_DETAIL = gql`
query biologicalProcessByName(
  $filter: BiologicalProcessWhere
) {
  biologicalProcesses(
    where:$filter
  ) {
    FID
    FID_S
    Name
    AlternateNames
    Description
    Type
    Companies{
        FID
        FID_S
        Name
        Description
        FinanceStatus
        FoundationYear
    }
  }
}
`

function BiologicalProcessDetail() {
let params = useParams();
  const { loading, data, error } = useQuery(GET_BIOLOGICAL_PROCESS_DETAIL, {
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
                data.biologicalProcesses.map(row => {
                  return ( 
                    <div>
                          <BiologicalProcessDetailView 
                          key={row.FID} 
                          FID={row.FID}
                          Name={row.Name} 
                          AlternateNames={row.AlternateNames}
                          Description={row.Description} 
                          Companies={row.Companies}
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
                      Biological Process Details
                    </Typography>
                  </AppBar>
                  <Paper elevation={3}>
                      No Biological Process Details available for display!
                  </Paper>
                </Container>
            );
        }
}

export default BiologicalProcessDetail;