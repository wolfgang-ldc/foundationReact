import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import SourceReferenceDetailView from './SourceReferenceDetailView'

const GET_SOURCE_REFERENCE_DETAIL = gql`
  query sourceReferenceByID(
    $substring: Int
  ) {
    sourceReferenceByID(substring: $substring) {
        FID
        FID_S
        Name
        Description
        HomePage
        CreationDate
        Items{
            FID
            FID_S
            Name
            Type
        }
      }
  }
`

function SourceReferenceDetail() {
  let params = useParams();
  
const { loading, data, error } = useQuery(GET_SOURCE_REFERENCE_DETAIL, {
  variables: {
    substring: parseInt(params.id)
  },
})

        if(params.id !== ":id"){
            return(
              <div>
              {loading && !error && <p>Loading...</p>}
                {error && !loading && <p>Error</p>}
                {data && !loading && !error && (
                  data.sourceReferenceByID.map(row => {
                    return ( 
                      <div>
                      <SourceReferenceDetailView 
                      key={row.FID} 
                      FID={row.FID}
                      Name={row.Name} 
                      Description={row.Description} 
                      HomePage={row.HomePage}
                      CreationDate={row.CreationDate}
                      Items={row.Items}
                      />
                    </div>
                    )  
                  }
                ))}
              </div>
            )
        }
        else{
            return (
                <Container maxWidth="lg">
                  <AppBar position="static">
                    <Typography variant="h6" >
                      Source Reference Details
                    </Typography>
                  </AppBar>
                  <Paper elevation={3}>
                      No SourceReference Details available for display!
                  </Paper>
                </Container>
            );
        }
}

export default SourceReferenceDetail;