import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import ItemDetailView from './ItemDetailView';

const GET_ITEM_DETAIL = gql`
  query items(
    $substring: Int
  ) {
    itemByID(
      substring: $substring
      ) {
        FID
        FID_S
        Name
        AlternateNames
        Description
        HomePage
        CreationDate
        Type
      }
  }
`

function ItemDetail() {
  let params = useParams();
  
  const { loading, data, error } = useQuery(GET_ITEM_DETAIL, {
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
                data.itemByID.map(row => {
                  return ( 
                    <ItemDetailView 
                    key={row.FID} 
                    FID={row.FID}
                    FID_S={row.FID_S}
                    Name={row.Name} 
                    AlternateNames={row.AlternateNames}
                    Description={row.Description} 
                    HomePage={row.HomePage}
                    CreationDate={row.CreationDate}
                    Type={row.Type}
                    />
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
                      Item Details
                    </Typography>
                  </AppBar>
                  <Paper elevation={3}>
                      No Item Details available for display!
                  </Paper>
                </Container>
            );
        }
}

export default ItemDetail;