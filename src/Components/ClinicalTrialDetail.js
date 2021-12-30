import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import ClinicalTrialDetailView from './ClinicalTrialDetailView'

const GET_CLINICAL_TRIAL_DETAIL = gql`
query clinicalTrialByName(
  $filter: ClinicalTrialWhere
) {
  clinicalTrials(
    where:$filter
  ) {
      FID
      FID_S
      Name
      Acronym
      HomePage
      Description
      Conditions
      Intervention
      SponsorCollaborator
      StudyType
      StudyResults
      Recruitment
      Enrollment
      FirstPostedDate
      StartDate
      CompletionDate
      Stage
      Type
      Companies{
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
          MolecularTargets{
            FID_S
            Name
          }
      }
      Events{
        FID_S
        Name
        EventDate
        HomePage
        Type
        ApprovedMolecules{
          FID_S
          Name
        }
        Companies{
          FID_S
          Name
        }
        EventOutcomes{
          FID_S
          Name
        }
        EventOutcomeTypes{
          FID_S
          Name
        }
      }
      Predictions{
        FID_S
        Name
        EventActualDate
        EventDate
        EventQuarter
        EventYear
        HomePage
        Type
        Companies{
          FID_S
          Name
        }
        Molecules{
          FID_S
          Name
        }
      }
    }
}
`

function ClinicalTrialDetail() {
  let params = useParams();

  const { loading, data, error } = useQuery(GET_CLINICAL_TRIAL_DETAIL, {
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
                data.clinicalTrials.map(row => {
                  return ( 
                    <div>
                          <ClinicalTrialDetailView 
                          FID={row.FID}
                          Name={row.Name} 
                          Acronym={row.Acronym}
                          HomePage={row.HomePage}
                          FirstPostedDate={row.FirstPostedDate}
                          StartDate={row.StartDate}
                          CompletionDate={row.CompletionDate}
                          Description={row.Description} 
                          Conditions={row.Conditions}
                          Intervention={row.Intervention}
                          SponsorCollaborator={row.SponsorCollaborator}
                          StudyType={row.StudyType}
                          StudyResults={row.StudyResults}
                          Recruitment={row.Recruitment}
                          Enrollment={row.Enrollment}
                          Companies={row.Companies}
                          Diseases={row.Diseases}
                          TherapeuticMolecules={row.TherapeuticMolecules}
                          Events={row.Events}
                          Predictions={row.Predictions}
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
                      Clinical Trial Details
                    </Typography>
                  </AppBar>
                  <Paper elevation={3}>
                      No No Clinical Trial Details available for display!
                  </Paper>
                </Container>
            );
        }
}

export default ClinicalTrialDetail;