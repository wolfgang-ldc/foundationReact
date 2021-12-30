import React from 'react'
import {Link} from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    TableSortLabel,
  } from '@material-ui/core'

  const GET_SIMILAR_MOLECULES = gql`
  query moleculesSimilarByTarget(
      $moleculeSubstring: String
  ){
    moleculesSimilarByTarget(
      moleculeSubstring:$moleculeSubstring
    ){
        FID
        FID_S
        Name
        PipelineStatus
        AlternateNames
        Description
        Type
        HighestDevelopmentStage
        PrimaryModality
        Modalities{
          FID_S
          Name
        }
        DevelopmentStages{
          FID_S
          Name
        }
        Companies{
          FID_S
          Name
        }
        MolecularTargets{
          FID_S
          FID
          Name
          Description
          AlternateNames
          HomePage
        }
        ClinicalTrials{
          FID_S
          Name
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
        }
      }
  }
`

function SimilarMoleculeList(props) {
    const [order, setOrder] = React.useState('ASC')
    const [orderBy, setOrderBy] = React.useState('Name')

    const { loading, data, error } = useQuery(GET_SIMILAR_MOLECULES, {
      variables: {
        moleculesubstring: props.TherapeuticMolecule,
        orderBy: { [orderBy]: order },
      },
    })
    
    const handleSortRequest = (property) => {
        const newOrderBy = property
        let newOrder = 'DESC'
    
        if (orderBy === property && order === 'DESC') {
          newOrder = 'ASC'
        }
    
        setOrder(newOrder)
        setOrderBy(newOrderBy)
   }

        if(props.TherapeuticMolecule !== ""){
            return(
              <div>
              {loading && !error && <p>Loading...</p>}
                {error && !loading && <p>Error</p>}
                {data && !loading && !error && (
                      <Table >
                      <TableHead>
                        <TableRow>
                          <TableCell
                            key="FID"
                            sortDirection={orderBy === 'FID' ? order : false}
                          >
                            <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                              <TableSortLabel
                                active={orderBy === 'FID'}
                                direction={order}
                                onClick={() => handleSortRequest('FID')}
                              >
                                ID
                              </TableSortLabel>
                            </Tooltip>
                          </TableCell>
                          <TableCell
                            key="HomePage"
                            sortDirection={orderBy === 'HomePage' ? order : false}
                          >
                            <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                              <TableSortLabel
                                active={orderBy === 'HomePage'}
                                direction={order}
                                onClick={() => handleSortRequest('imHomePageage')}
                              >
                                HomePage
                              </TableSortLabel>
                            </Tooltip>
                          </TableCell>
                          <TableCell
                            key="Name"
                            sortDirection={orderBy === 'Name' ? order : false}
                          >
                            <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                              <TableSortLabel
                                active={orderBy === 'Name'}
                                direction={order}
                                onClick={() => handleSortRequest('Name')}
                              >
                                Name
                              </TableSortLabel>
                            </Tooltip>
                          </TableCell>
                          <TableCell
                            key="PipelineStatus"
                            sortDirection={orderBy === 'PipelineStatus' ? order : false}
                          >
                            <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                              <TableSortLabel
                                active={orderBy === 'PipelineStatus'}
                                direction={order}
                                onClick={() => handleSortRequest('PipelineStatus')}
                              >
                                PipelineStatus
                              </TableSortLabel>
                            </Tooltip>
                          </TableCell>
                          <TableCell
                            key="AlternateNames"
                            sortDirection={orderBy === 'AlternateNames' ? order : false}
                          >
                            <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                              <TableSortLabel
                                active={orderBy === 'AlternateNames'}
                                direction={order}
                                onClick={() => handleSortRequest('AlternateNames')}
                              >
                                AlternateNames
                              </TableSortLabel>
                            </Tooltip>
                          </TableCell>
                          <TableCell
                            key="HighestDevelopmentStage"
                            sortDirection={orderBy === 'HighestDevelopmentStage' ? order : false}
                          >
                            <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                              <TableSortLabel
                                active={orderBy === 'HighestDevelopmentStage'}
                                direction={order}
                                onClick={() => handleSortRequest('HighestDevelopmentStage')}
                              >
                                Stage
                              </TableSortLabel>
                            </Tooltip>
                          </TableCell>
                          <TableCell
                            key="PrimaryModality"
                            sortDirection={orderBy === 'PrimaryModality' ? order : false}
                          >
                            <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                              <TableSortLabel
                                active={orderBy === 'PrimaryModality'}
                                direction={order}
                                onClick={() => handleSortRequest('PrimaryModality')}
                              >
                                Modality
                              </TableSortLabel>
                            </Tooltip>
                          </TableCell>
                          <TableCell>Description</TableCell>
                          <TableCell>Company</TableCell>
                          <TableCell>Target(s)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                      {data.moleculesSimilarByTarget.map(n => {
                        return (
                          <TableRow key={n.FID}>
                              <TableCell>
                                  {n.FID}
                              </TableCell>
                              <TableCell>
                              {n.HomePage === "" ? "" : <a href={n.HomePage} target="_blank" rel="noopener noreferrer">
                                  <img alt="WebLink" height="25" width="25" className="image" src="http://localhost/images/weblink"/></a>}
                              </TableCell>
                              <TableCell component="th" scope="row" >
                                  <Link to={`/therapeuticmoleculedetail/${n.FID_S}`} >{n.Name}</Link>
                              </TableCell>
                              <TableCell>
                              {n.PipelineStatus}
                              </TableCell>
                              <TableCell>
                              {n.AlternateNames}
                              </TableCell>
                              <TableCell>
                                  {n.HighestDevelopmentStage}
                              </TableCell>
                              <TableCell>
                                  {n.PrimaryModality}
                              </TableCell>
                              <TableCell>
                                  {n.Description}
                              </TableCell>
                              <TableCell align="left">
                                  <TableBody>
                                  {n.Companies.map(r => (
                                      <TableRow key={r.Name}>
                                          <TableCell component="th" scope="row">
                                            <Link to={`/companysummary/${r.FID_S}`} >{r.Name}</Link>
                                          </TableCell>
                                      </TableRow>
                                  ))}
                                  </TableBody>
                              </TableCell>
                              <TableCell align="left">
                                  <TableBody>
                                  {n.MolecularTargets.map(r => (
                                      <TableRow key={r.Name}>
                                          <TableCell component="th" scope="row">
                                            <Link to={`/moleculartargetdetail/${r.FID_S}`} >{r.Name}</Link>
                                          </TableCell>
                                      </TableRow>
                                  ))}
                                  </TableBody>
                              </TableCell>
                          </TableRow>
                        )
                      })}
                      </TableBody>
                  </Table>  
                  )}
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
                      No Similar Therapeutic Molecule Details available for display!
                  </Paper>
                </Container>
            );
        }
}

export default SimilarMoleculeList;