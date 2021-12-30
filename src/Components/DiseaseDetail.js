import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import DiseaseDetailView from './DiseaseDetailView'

const GET_DISEASE_DETAIL = gql`
query diseaseByID(
  $filter: DiseaseWhere
) {
  diseases(
    where: $filter) {
      FID
      FID_S
      Name
      AlternateNames
      Description
      HomePage
      CreationDate
      Type
      Approvals{
          FID
          FID_S
          Name
          EventDate
          HomePage
          ApprovedMolecules{
              FID
              FID_S
              Name
              AlternateNames
              HighestDevelopmentStage
              PipelineStatus
              PrimaryModality
          }
          Companies{
              FID
              FID_S
              Name
          }
      }
      ClinicalTrials(options:{
        sort:[
          {FirstPostedDate:DESC}
        ]
      }){
          FID
          FID_S
          Name
          FirstPostedDate
          Companies{
              FID
              FID_S
              Name
          }
          DevelopmentStages{
              FID
              FID_S
              Name
          }
          Diseases{
              FID
              FID_S
              Name
          }
          TherapeuticMolecules{
              FID
              FID_S
              Name
          }
      }
      TherapeuticMolecules(options:{
        sort:[
          {Name:ASC}
        ]
      }){
          FID
          FID_S
          Name
          AlternateNames
          HighestDevelopmentStage
          PipelineStatus
          PrimaryModality
          ClinicalTrials{
              FID
              FID_S
              Name
          }
          Companies{
              FID
              FID_S
              Name
          }
          Events{
              FID
              FID_S
              Name
              EventOutcomes{
                  Name
              }
          }
          MolecularTargets{
              FID
              FID_S
              Name
          }
      }
    }
}
`

function DiseaseDetail() {

  let params = useParams();
  
  const { loading, data, error } = useQuery(GET_DISEASE_DETAIL, {
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
                data.diseases.map(row => {
                  return ( 
                    <div>
                          <DiseaseDetailView 
                          key={row.FID} 
                          FID={row.FID}
                          FID_S={row.FID_S}
                          Name={row.Name} 
                          AlternateNames={row.AlternateNames}
                          Description={row.Description} 
                          HomePage={row.HomePage}
                          CreationDate={row.CreationDate}
                          Type={row.Type}
                          Approvals={row.Approvals}
                          ClinicalTrials={row.ClinicalTrials}
                          TherapeuticMolecules={row.TherapeuticMolecules}
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
                      Disease Details
                    </Typography>
                  </AppBar>
                  <Paper elevation={3}>
                      No Disease Details available for display!
                  </Paper>
                </Container>
            );
        }
}

export default DiseaseDetail;