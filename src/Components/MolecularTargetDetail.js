import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import MolecularTargetDetailView from './MolecularTargetDetailView'

const GET_MOLECULAR_TARGET_DETAIL = gql`
query targetsByName(
    $filter: MolecularTargetWhere
  ) {
    molecularTargets(
        where:$filter
      ) 
    {
        FID
        FID_S
        Name
        AlternateNames
        Description
        HomePage
        CreationDate
        Type
        SourceReferences{
          FID_S
          Name
          Description
          HomePage
          CreationDate
          Items{
            FID_S
            Name
          }
        }
        TherapeuticMolecules{
            FID
            FID_S
            Name
            AlternateNames
            Description
            HighestDevelopmentStage
            PipelineStatus
            PrimaryModality
            NoOfTrials
            ClinicalTrials{
              FID_S
              Name
              Recruitment
              FirstPostedDate
            }
            Companies{
                FID_S
                Name
                FinanceStatus
            }
            Events{
              FID_S
              Name
              EventDate
              EventOutcomes{
                Name
              }
              HomePage
            }
            MolecularTargets{
              FID_S
              Name
            }
        }
    }
  }
`

function MolecularTargetDetail() {
   let params = useParams();
  const { loading, data, error } = useQuery(GET_MOLECULAR_TARGET_DETAIL, {
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
                data.molecularTargets.map(row => {
                  return ( 
                    <div>
                          <MolecularTargetDetailView 
                          key={row.FID} 
                          FID={row.FID}
                          FID_S={row.FID_S}
                          Name={row.Name} 
                          AlternateNames={row.AlternateNames}
                          Description={row.Description} 
                          HomePage={row.HomePage}
                          CreationDate={row.CreationDate}
                          Type={row.Type}
                          SourceReferences={row.SourceReferences}
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
                      Molecular Target Details
                    </Typography>
                  </AppBar>
                  <Paper elevation={3}>
                      No TNo Moecular Target Details available for display!
                  </Paper>
                </Container>
            );
        }
}

export default MolecularTargetDetail;