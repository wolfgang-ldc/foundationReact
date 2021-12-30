import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { useParams } from "react-router-dom";

import TherapeuticMoleculeDetailView from './TherapeuticMoleculeDetailView'

const GET_THERAPEUTICMOLECULE_DETAIL = gql`
query therapeuticMoleculeDetail(
  $filter: TherapeuticMoleculeWhere
  $orderBy:[ClinicalTrialSort]
){
  therapeuticMolecules(
    where:$filter
  ) {
      FID
      FID_S
      Name
      AlternateNames
      Description
      Type
      Modalities{
        Name
      }
      HighestDevelopmentStage
      Companies{
        FID_S
        Name
        HomePage
      }
      Events(
          options:{
            sort:[
              {EventDate:DESC}
            ]
          }
        ){
        FID
        FID_S
        Name
        Description
        HomePage
        EventDate
        Companies{
          FID_S
          Name
        }
        EventOutcomes{
          Name
        }
        EventTypes{
          Name
        }
      }
      MolecularTargets{
        FID
        FID_S
        Name
        Description
        AlternateNames
        HomePage
      }
      ClinicalTrials(
      options:{sort:$orderBy}
      ){
        FID_S
        Name
        Acronym
        Description
        Recruitment
        Enrollment
        FirstPostedDate
        Companies{
          FID_S
          Name
        }
        DevelopmentStages{
          FID_S
          Name
        }
        Diseases{
          FID_S
          Name
        }
        TherapeuticMolecules{
          FID_S
          Name
        }
        Events(
          options:{
            sort:[
              {EventDate:DESC}
            ]
          }
        ){
          FID_S
          Name
          EventDate
          HomePage
          Type
          EventOutcomes{
            Name
          }
          EventOutcomeTypes{
            Name
          }
        }
        Predictions(
          options:{
            sort:[
              {EventDate:DESC}
            ]
          }
        ){
          FID_S
          Name
          EventDate
          EventQuarter
          HomePage
          Outcome{
            Name
          }
          EventActualDate
        }
      }
      TherapeuticProducts{
        FID
        FID_S
        Name
        Description
        image
        HomePage
      }
    }
}
`

function TherapeuticMoleculeDetail() {
  let params = useParams();

  console.log("Am I getting" +  params.id)
  const [order, setOrder] = React.useState('DESC')
  const [orderBy, setOrderBy] = React.useState('FirstPostedDate')
  
  const { loading, data, error } = useQuery(GET_THERAPEUTICMOLECULE_DETAIL, {
    variables: {
      filter: { FID_S : parseInt(params.id) },
      orderBy: { [orderBy]: order },
    },
  })
    
        if(params.id !== ":id"){
            return(
              <div>
                {loading && !error && <p>Loading...</p>}
                {error && !loading && <p>Error</p>}
                {data && !loading && !error && (
                  data.therapeuticMolecules.map(row => {
                    return ( 
                      <div>
                          <TherapeuticMoleculeDetailView 
                          key={row.FID} 
                          FID={row.FID}
                          FID_S={row.FID_S}
                          Name={row.Name} 
                          AlternateNames={row.AlternateNames}
                          Description={row.Description} 
                          Modality={row.Modalities.length === 0 ? "" : row.Modalities[0].Name}
                          Stage={row.HighestDevelopmentStage}
                          CompanyFID_S={row.Companies.length === 0 ? "" : row.Companies[0].FID_S}
                          CompanyName={row.Companies.length === 0 ? "" : row.Companies[0].Name}
                          CompanyHomePage={row.Companies.length === 0 ? "" : row.Companies[0].HomePage}
                          Companies={row.Companies}
                          ClinicalTrials={row.ClinicalTrials}
                          Events={row.Events}
                          MolecularTargets={row.MolecularTargets}
                          TherapeuticProducts={row.TherapeuticProducts}
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
                      Therapeutic Molecule Details
                    </Typography>
                  </AppBar>
                  <Paper elevation={3}>
                      No Therapeutic Molecule Details available for display!
                  </Paper>
                </Container>
            );
        }
}

export default TherapeuticMoleculeDetail;