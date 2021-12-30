import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import CompanyCore from './CompanyCore';
import CompanyPipeline from './CompanyPipeline';
import CompanyEvents from './CompanyEvents';
import CompanyClinicalTrials from './CompanyClinicalTrials';
import CompanyItems2 from './CompanyItems2';
import TherapeuticProductCompanySales from './TherapeuticProductCompanySales';

const GET_COMPANY = gql`
query companyQuery(
    $first: Int
    $offset: Int
    $orderBy: [CompanySort]
    $filter: CompanyWhere)
   {
    companies(
      where: $filter
      options:{ limit: $first, skip: $offset, sort: $orderBy }
    ) 
      {
        FID
        FID_S
        Name
        NewSynonyms
        FinanceStatus
        Description
        HomePage
        Type
        image
        FoundationYear
        Locations{
          Name
          States{
            Name
          }
          Countries{
            Name
          }
        }
        CompanyProducts{
          Name
        }
        CompletePipelineMolecules{
          FID
          FID_S
          Name
          AlternateNames
          Description
          MolecularTargets{
            Name
          }
          Modalities{
            Name
          }
          DevelopmentStages{
            Name
          }
          Companies{
            Name
          }
          ClinicalTrials{
            Name
          }
        }
        Events{
          Name
          Description
          EventDate
          HomePage
          Type
          Items{
            Name
          }
        }
        ClinicalTrials{
          Name
          Description
          Recruitment
          Enrollment
          Companies{
            Name
          }
          DevelopmentStages{
            Name
          }
          Diseases{
            Name
          }
          TherapeuticMolecules{
            Name
          }
        }
        CompanyClasses{
          Name
        }
        TherapeuticAreas{
          Name
        }
     }
  }
`

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }



function CompanySummary() {
  let params = useParams();
    //const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    console.log("CompanySummary: " + params.id);

    const [order, setOrder] = React.useState('ASC')
    const [orderBy, setOrderBy] = React.useState('Name')
  
    var myPipeline = [];
  const handleSortRequest = (property) => {
    const newOrderBy = property
    let newOrder = 'DESC'

    if (orderBy === property && order === 'DESC') {
      newOrder = 'ASC'
    }

    setOrder(newOrder)
    setOrderBy(newOrderBy)
  }

    
  const { loading, data, error } = useQuery(GET_COMPANY, {
    variables: {
      //filter: {FID_S :3709},
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
                      data.companies.map(row => {
                      myPipeline.push();
                      if(row.Locations[0].Countries[0].Name === "United States"){
                        var Place = row.Locations[0].Name + ", " + row.Locations[0].States[0].Name + " in " + row.Locations[0].Countries[0].Name;
                      }else{
                          Place = row.Locations[0].Name + " in " + row.Locations[0].Countries[0].Name;
                      }
                      var CompanyClassification = "";
                      row.CompanyClasses.map(r => (
                        CompanyClassification = CompanyClassification + r.Name + ", "
                      ))
                      var TherapeuticAreas = "";
                      row.TherapeuticAreas.map(r => (
                        TherapeuticAreas = TherapeuticAreas + r.Name + ", "
                      ))
                      return ( 
                        <div>
                        <CompanyCore 
                        FID={row.FID}
                        FID_S={row.FID_S} 
                        Name={row.Name} 
                        NewSynonyms={row.NewSynonyms}
                        Ticker={row.NewSynonyms}
                        FinanceStatus={row.FinanceStatus}
                        Description={row.Description} 
                        HomePage={row.HomePage} 
                        Location={Place}
                        image={row.image}
                        FoundationYear={row.FoundationYear}
                        CompanyClassification={CompanyClassification}
                        TherapeuticAreas={TherapeuticAreas}
                        />
                        <Container maxWidth="xl">
                        <AppBar position="static">
                            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                <Tab label="Related Items" {...a11yProps(0)} />
                                <Tab label="Pipeline"  {...a11yProps(1)} />
                                <Tab label="Events"  {...a11yProps(2)} />
                                <Tab label="Clinical Trials"  {...a11yProps(3)} />
                                <Tab label="Product Sales"  {...a11yProps(4)} />
                          </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                          <Paper elevation={3}>
                           <CompanyItems2 FID_S={row.FID_S}/> 
                          </Paper>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                          <Paper elevation={3}>
                            <CompanyPipeline FID_S={row.FID_S}/>
                          </Paper>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                          <Paper elevation={3}>
                            <CompanyEvents FID_S={row.FID_S}/>  
                          </Paper>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                          <Paper elevation={3}>
                            <CompanyClinicalTrials FID_S={row.FID_S}/> 
                          </Paper>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                          <Paper elevation={3}>
                            <TherapeuticProductCompanySales CompanyProducts={row.CompanyProducts}/> 
                          </Paper>
                        </TabPanel>
                        </Container>
                        </div>
                      )
                    }
                  )
                )}
              </div>
           )
        }
        else{
            return (
                <Container maxWidth="lg">
                  <AppBar position="static">
                    <Typography variant="h6" >
                      Company Details
                    </Typography>
                  </AppBar>
                  <Paper elevation={3}>
                      No Company Details available for display!
                  </Paper>
                </Container>
            );
        }
}

export default CompanySummary;