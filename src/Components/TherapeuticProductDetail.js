import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import TherapeuticProductDetailView from './TherapeuticProductDetailView'
import TherapeuticProductSalesQuery from './TherapeuticProductSalesQuery'

const GET_THERAPEUTIC_PRODUCT_DETAIL = gql`
query productByName(
  $filter: TherapeuticProductWhere
) {
  therapeuticProducts(
    where:$filter
  ) {
    FID
    FID_S
    Name
    Description
    HomePage
    Type
    CreationDate
    image
    Companies{
        FID_S
        Name
    }
    Molecules{
      FID_S
      Name
      ApprovedDiseases{
        Name
      }
    }
    ProductSales{
      Sales_US
      Sales_ROW
      Earnings{
        Name
        YearQuarter
      }
    }
  }
}
`

function TherapeuticProductDetail() {
    let params = useParams();
  const { loading, data, error } = useQuery(GET_THERAPEUTIC_PRODUCT_DETAIL, {
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
              data.therapeuticProducts.map(row => {
                //Extract multiple values into a comma-separated list to display in a single field
                var CompanyList = "";
                row.Companies.map(r => (
                  CompanyList = CompanyList + r.Name + ","
                ))
                var MoleculeList = "";
                var ApprovedDiseases = [];
                row.Molecules.map(r => (
                  MoleculeList = MoleculeList + r.Name + "," ,
                  ApprovedDiseases = r.ApprovedDiseases               
                ))
                return ( 
                  <p>
                  <TherapeuticProductDetailView 
                  key={row.FID} 
                  FID={row.FID}
                  Name={row.Name} 
                  HomePage={row.HomePage}
                  image={row.image}
                  Description={row.Description} 
                  Companies={row.Companies}
                  Molecules={row.Molecules}
                  CompanyList={CompanyList}
                  MoleculeList={MoleculeList}
                  ApprovedDiseases={ApprovedDiseases}
                  Sales={row.Sales}
                  />
                  <TherapeuticProductSalesQuery Name={row.Name}/>
                </p>
                )  
              }
            ))}
          </div>
          )
        }
        else
        {
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

export default TherapeuticProductDetail;