import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import TherapeuticProductSalesView from './TherapeuticProductSalesView'

const GET_PRODUCT_SALES = gql`
query productSales(
    $orderBy: [ProductSalesSort]
    $filter: ProductSalesWhere)
{
  productSales(
    where:$filter
    options:{ sort: $orderBy }
  ){
    FID
    Name
    YearQuarter
    Sales_US
    Sales_ROW
    TotalSales
    Products{
      Name
    }
  }
}
`

function TherapeuticProductSalesQuery(props) {
    
  const { loading, data, error } = useQuery(GET_PRODUCT_SALES, {
    variables: {
      orderBy: { ["Name"]:"ASC" },
      filter: {Name_CONTAINS:props.Name}
    },
  })

        if(props.Name !== ""){
          return(
            <div>
              <AppBar position="static">
                <Typography variant="h6" >
                  {props.Name}
                </Typography>
              </AppBar>
              {loading && !error && <p>Loading...</p>}
              {error && !loading && <p>Error</p>}
              {data && !loading && !error && (
                <TherapeuticProductSalesView Sales={data.productSales}/>
              )}
            </div>
          )
        }
        else{
            return (
                <Container maxWidth="lg">
                  <AppBar position="static">
                    <Typography variant="h6" >
                      Therapeutic Product Details
                    </Typography>
                  </AppBar>
                  <Paper elevation={3}>
                      No Therapeutic Product Details available for display!
                  </Paper>
                </Container>
            );
        }
}

export default TherapeuticProductSalesQuery;