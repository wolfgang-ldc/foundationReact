import React from 'react';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 120,
      width: 85,
      align: "center"
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

function MasterConceptView(props) {  
    const classes = useStyles();
    const [spacing] = React.useState(2);
    var imageSource = "";
  return (
    <React.Fragment>
        <Container maxWidth="lg">
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                    {props.MasterConcepts.map((row) => ( 
                        imageSource = "http://localhost/images/" + row.type,                 
                        <Grid key={row} item>
                            <Paper className={classes.paper}>
                                <Typography variant="h10" >
                                {row.type === "BiologicalProcess" ? <Link to={`/biologicalprocesslist`}>
                                <img alt="Process" height="50" width="50" className="image" title="Process" src={imageSource}/><br></br>Biological Process<br></br>{row.count}</Link> :
                                row.type === "BiologicalStructure" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Structure" height="50" width="50" className="image" title="Structure" src={imageSource}/><br></br>Biological Structure<br></br>{row.count}</Link> :
                                row.type === "City" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="City" height="50" width="50" className="image" title="City" src={imageSource}/><br></br>{row.type}<br></br>{row.count}</Link> :
                                row.type === "CompanyClass" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="CompanyClass" height="50" width="50" className="image" title="CompanyClass" src={imageSource}/><br></br>Company Class<br></br>{row.count}</Link> :
                                row.type === "Continent" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Continent" height="50" width="50" className="image" title="Continent" src={imageSource}/><br></br>{row.type}<br></br>{row.count}</Link> :
                                row.type === "Country" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Country" height="50" width="50" className="image" title="Country" src={imageSource}/><br></br>{row.type}<br></br>{row.count}</Link> :
                                row.type === "ClinicalTrial" ? <Link to={`/clinicaltriallist`}>
                                <img alt="Trial" height="50" width="50" className="image" title="Trial" src={imageSource}/><br></br>Clinical Trial<br></br>{row.count}</Link> :
                                row.type === "DevelopmentStage" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Stage" height="50" width="50" className="image" title="Stage" src={imageSource}/><br></br>Development Stage<br></br>{row.count}</Link> :
                                row.type === "Disease" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Disease" height="50" width="50" className="image" title="Disease" src={imageSource}/><br></br>{row.type}<br></br>{row.count}</Link> :
                                row.type === "Event:Acquisition" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Acquisition" height="50" width="50" className="image" title="Acquisition" src="http://localhost/images/eventacquisition"/><br></br>Event: Acquisition<br></br>{row.count}</Link> :
                                row.type === "Event:BreakThroughTherapy" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="BreakThroughTherapy" height="50" width="50" className="image" title="BreakThroughTherapy" src="http://localhost/images/eventbreakthroughtherapy"/><br></br>Event: Breakthrough Therapy<br></br>{row.count}</Link> :
                                row.type === "Event:BusinessReview" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="BusinessReview" height="50" width="50" className="image" title="BusinessReview" src="http://localhost/images/eventbusinessreview"/><br></br>Event: Business Review<br></br>{row.count}</Link> :
                                row.type === "Event:CFDAApproval" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="CFDAApproval" height="50" width="50" className="image" title="CFDAApproval" src="http://localhost/images/eventcfdaapproval"/><br></br>Event: CFDA Approval<br></br>{row.count}</Link> :
                                row.type === "Event:ClinicalTrialInitiation" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Initiation" height="50" width="50" className="image" title="Initiation" src="http://localhost/images/eventclinicaltrialinitiation"/><br></br>Event: Clinical Trial Initiation<br></br>{row.count}</Link> :
                                row.type === "Event:ClinicalTrialPhase" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Phase" height="50" width="50" className="image" title="Phase" src="http://localhost/images/eventclinicaltrialphase"/><br></br>Event: Clinical Trial Phase<br></br>{row.count}</Link> :
                                row.type === "Event:ClinicalTrialResult" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Result" height="50" width="50" className="image" title="Result" src="http://localhost/images/eventclinicaltrialresult"/><br></br>Event: ClinicalTrial Result<br></br>{row.count}</Link> :                                       
                                row.type === "Event:ClinicalTrialSuspension" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Suspension" height="50" width="50" className="image" title="Suspension" src="http://localhost/images/eventclinicaltrialsuspension"/><br></br>Event: ClinicalTrial Suspension<br></br>{row.count}</Link> :                                       
                                row.type === "Event:Collaboration" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Collaboration" height="50" width="50" className="image" title="Collaboration" src="http://localhost/images/eventcollaboration"/><br></br>Event: Collaboration<br></br>{row.count}</Link> :                                       
                                row.type === "Event:EMEAApproval" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="EMEAApproval" height="50" width="50" className="image" title="EMEAApproval" src="http://localhost/images/eventemeaapproval"/><br></br>Event: EMEA Approval<br></br>{row.count}</Link> :
                                row.type === "Event:FDAApproval" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="FDAApproval" height="50" width="50" className="image" title="FDAApproval" src="http://localhost/images/eventfdaapproval"/><br></br>Event: FDA Approval<br></br>{row.count}</Link> :
                                row.type === "Event:FDAINDFiling" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="FDAIND" height="50" width="50" className="image" title="FDAIND" src="http://localhost/images/eventfdaind"/><br></br>Event: FDA IND<br></br>{row.count}</Link> :
                                row.type === "Event:FDANDAFiling" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="FDANDA" height="50" width="50" className="image" title="FDANDA" src="http://localhost/images/eventfdanda"/><br></br>Event: FDA NDA<br></br>{row.count}</Link> : 
                                row.type === "Event:FDANDAFiling" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="FDANDA" height="50" width="50" className="image" title="FDANDA" src="http://localhost/images/eventfdanda"/><br></br>Event: FDA NDA<br></br>{row.count}</Link> : 
                                row.type === "Event:FDAPriorityReview" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="PriorityReview" height="50" width="50" className="image" title="PriorityReview" src="http://localhost/images/eventfdapriorityreview"/><br></br>Event: FDA Priority Review<br></br>{row.count}</Link> : 
                                row.type === "Event:FDASPA" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="SPA" height="50" width="50" className="image" title="SPA" src="http://localhost/images/eventfdaspa"/><br></br>Event: Special Protocol Assessment<br></br>{row.count}</Link> : 
                                row.type === "Event:MeetingPresentation" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="MeetingPresentation" height="50" width="50" className="image" title="MeetingPresentation" src="http://localhost/images/eventmeetingpresentation"/><br></br>Event: Meeting Presentation<br></br>{row.count}</Link> : 
                                row.type === "Event:InitialPublicOffering" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="IPO" height="50" width="50" className="image" title="IPO" src="http://localhost/images/eventipo"/><br></br>Event: Initial Public Offering<br></br>{row.count}</Link> : 
                                row.type === "Event:NewPrivateFinancing" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="NewPrivateFinancing" height="50" width="50" className="image" title="NewPrivateFinancing" src="http://localhost/images/eventnewprivatefinancing"/><br></br>Event: New PrivateF inancing<br></br>{row.count}</Link> : 
                                row.type === "Event:NewPublicOffering" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="NewPublicOffering" height="50" width="50" className="image" title="NewPublicOffering" src="http://localhost/images/eventnewpublicoffering"/><br></br>Event: New Public Offering<br></br>{row.count}</Link> : 
                                row.type === "Event:OrphanDrugDesignation" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="OrphanDrug" height="50" width="50" className="image" title="OrphanDrug" src="http://localhost/images/eventorphandrug"/><br></br>Event: Orphan Drug Designation<br></br>{row.count}</Link> : 
                                row.type === "Event:OtherApproval" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="OtherApproval" height="50" width="50" className="image" title="OtherApproval" src="http://localhost/images/eventotherapproval"/><br></br>Event: Other Approval<br></br>{row.count}</Link> : 
                                row.type === "Event:Patent" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Patent" height="50" width="50" className="image" title="Patent" src="http://localhost/images/eventpatent"/><br></br>Event: Patent<br></br>{row.count}</Link> : 
                                row.type === "Event:Personnel" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Personnel" height="50" width="50" className="image" title="Personnel" src="http://localhost/images/eventpersonnel"/><br></br>Event: Personnel<br></br>{row.count}</Link> : 
                                row.type === "Event:PressUpdate" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="PressUpdate" height="50" width="50" className="image" title="PressUpdate" src="http://localhost/images/eventpressupdate"/><br></br>Event: Press Update<br></br>{row.count}</Link> : 
                                row.type === "Event:QuarterlyEarnings" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Earnings" height="50" width="50" className="image" title="Earnings" src="http://localhost/images/eventquarterlyearnings"/><br></br>Event: Quarterly Earnings<br></br>{row.count}</Link> : 
                                row.type === "ExperimentalTechnique" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Experiment" height="50" width="50" className="image" title="Experiment" src="http://localhost/images/experimentaltechnique"/><br></br>Experimental Technique<br></br>{row.count}</Link> : 
                                row.type === "GeneticAlteration" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Mutation" height="50" width="50" className="image" title="Mutation" src={imageSource}/><br></br>Genetic Alteration<br></br>{row.count}</Link> :                                                                               
                                row.type === "MasterConcept" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="MasterConcept" height="50" width="50" className="image" title="MasterConcept" src={imageSource}/><br></br>Master Concept<br></br>{row.count}</Link> :
                                row.type === "Modality" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Modality" height="50" width="50" className="image" title="Modality" src={imageSource}/><br></br>{row.type}<br></br>{row.count}</Link> :
                                row.type === "MolecularTarget" ? <Link to={`/moleculartargetlist`}>
                                <img alt="Target" height="50" width="50" className="image" title="Target" src={imageSource}/><br></br>Molecular Target<br></br>{row.count}</Link> :
                                row.type === "Organization:Company" ? <Link to={`/companylist`}>
                                <img alt="Company" height="50" width="50" className="image" title="Company" src="http://localhost/images/Company"/><br></br>Organization: Company<br></br>{row.count}</Link> :
                                row.type === "Organization:FundingSource" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="FundingSource" height="50" width="50" className="image" title="FundingSource" src="http://localhost/images/FundingSource"/><br></br>Organization: Funding Source<br></br>{row.count}</Link> :
                                row.type === "Organization:ResearchOrganization" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="ResearchOrganization" height="50" width="50" className="image" title="ResearchOrganization" src="http://localhost/images/ResearchOrganization"/><br></br>Organization: Research Organization<br></br>{row.count}</Link> :
                                row.type === "Pathway" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Pathway" height="50" width="50" className="image" title="Pathway" src={imageSource}/><br></br>{row.type}<br></br>{row.count}</Link> :
                                row.type === "PathwayClass" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="PathwayClass" height="50" width="50" className="image" title="PathwayClass" src={imageSource}/><br></br>{row.type}<br></br>{row.count}</Link> :
                                row.type === "Person" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Person" height="50" width="50" className="image" title="Person" src={imageSource}/><br></br>{row.type}<br></br>{row.count}</Link> :
                                row.type === "Prediction:ClinicalTrialInitiation" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Trial Start" height="50" width="50" className="image" title="Trial Start" src="http://localhost/images/predictionclinicaltrialinitiation"/><br></br>Prediction: Clinical Trial Initiation<br></br>{row.count}</Link> :
                                row.type === "Prediction:ClinicalTrialResult" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="ProductSales" height="50" width="50" className="image" title="Trial Result" src="http://localhost/images/predictionclinicaltrialresult"/><br></br>Prediction: Clinical Trial Result<br></br>{row.count}</Link> :
                                row.type === "Prediction:FDAPDFUA" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="PDFUA" height="50" width="50" className="image" title="PDFUA" src="http://localhost/images/fdapdfua"/><br></br>Prediction: FDA PDFUA<br></br>{row.count}</Link> :
                                row.type === "PredictionClass" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="PredictionClass" height="50" width="50" className="image" title="PredictionClass" src={imageSource}/><br></br>Prediction Class<br></br>{row.count}</Link> :
                                row.type === "ProductSales" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="ProductSales" height="50" width="50" className="image" title="ProductSales" src={imageSource}/><br></br>Product Sales<br></br>{row.count}</Link> :
                                row.type === "ScoreCard" ? <Link to={`/scorecard`}>
                                <img alt="ScoreCard" height="50" width="50" className="image" title="ScoreCard" src={imageSource}/><br></br>{row.type}<br></br>{row.count}</Link> :
                                row.type === "ScienceProject" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="ScienceProject" height="50" width="50" className="image" title="ScienceProject" src={imageSource}/><br></br>Science Project<br></br>{row.count}</Link> :
                                row.type === "SourceReference" ? <Link to={`/sourcereferencelist`}>
                                <img alt="Source" height="50" width="50" className="image" title="Source" src={imageSource}/><br></br>Source Reference<br></br>{row.count}</Link> :
                                row.type === "State" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="State" height="50" width="50" className="image" title="State" src={imageSource}/><br></br>{row.type}<br></br>{row.count}</Link> :
                                row.type === "Summary" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Summary" height="50" width="50" className="image" title="Summary" src={imageSource}/><br></br>{row.type}<br></br>{row.count}</Link> :
                                row.type === "TechnologyPlatform" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Platform" height="50" width="50" className="image" title="Platform" src={imageSource}/><br></br>Technology Platform<br></br>{row.count}</Link> :
                                row.type === "TherapeuticArea" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Area" height="50" width="50" className="image" title="Area" src={imageSource}/><br></br>Therapeutic Area<br></br>{row.count}</Link> :
                                row.type === "TherapeuticMolecule" ? <Link to={`/therapeuticmoleculelist`}>
                                <img alt="Molecule" height="50" width="50" className="image" title="Molecule" src={imageSource}/><br></br>Therapeutic Molecule<br></br>{row.count}</Link> :
                                row.type === "TherapeuticMoleculeClass" ? <Link to={`/itemsbytypelist/${row.type}`}>
                                <img alt="Molecule Class" height="50" width="50" className="image" title="Molecule Class" src={imageSource}/><br></br>Therapeutic Molecule Class<br></br>{row.count}</Link> :
                                row.type === "TherapeuticProduct" ? <Link to={`/therapeuticproductlist`}>
                                <img alt="Product" height="50" width="50" className="image" title="Product" src={imageSource}/><br></br>Therapeutic Product<br></br>{row.count}</Link> :
                            <img alt="Process" height="50" width="50" className="image" title="Process" src={imageSource}/>}                         
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </React.Fragment>
  )       
}

export default MasterConceptView;