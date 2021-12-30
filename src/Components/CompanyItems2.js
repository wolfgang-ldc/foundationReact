import React from 'react'
import {Link} from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 85,
      align: "center"
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

  const GET_COMPANY_ITEMS = gql`
    query companyItems(
      $filter: CompanyWhere) 
      {
      companies(
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
        Items{
            FID
            FID_S
            Name
            AlternateNames
            NewSynonyms
            HomePage
            image
            Type
            CreationDate
        }
      }
    }
`

function CompanyItems2(props) {
    const classes = useStyles();
    const [spacing] = React.useState(2);
    var TypeList = [];
    var UniqueTypeList = [];
    var RelatedItems = [];

    var AssignmentCounter = 0;
    var BiologicalProcessCounter = 0;
    var BiologicalStructureCounter = 0;
    var CityCounter = 0;
    var ClinicalTrialCounter = 0;
    var CompanyClassCounter = 0;
    var DateCounter = 0;
    var DevelopmentStageCounter = 0;
    var DiseaseCounter = 0;
    var EventAcquisitionCounter = 0;
    var EventBreakThroughTherapyCounter = 0;
    var EventBusinessReviewCounter = 0;
    var EventCFDAApprovalCounter = 0;
    var EventClinicalTrialInitiationCounter = 0;
    var EventClinicalTrialPhaseCounter = 0;
    var EventClinicalTrialResultCounter = 0;
    var EventClinicalTrialSuspensionCounter = 0;
    var EventCollaborationCounter = 0;
    var EventEMEAApprovalCounter = 0;
    var EventFDAApprovalCounter = 0;
    var EventFDANDACounter = 0;
    var EventFDAINDCounter = 0;
    var EventFDAPriorityReviewCounter = 0;
    var EventInitialPublicOfferingCounter = 0;
    var EventMeetingPresentationCounter = 0;
    var EventNewPublicOfferingCounter = 0;
    var EventOrphanDrugCounter = 0;
    var EventOtherApprovalCounter = 0;
    var EventPatentCounter = 0;
    var EventPersonnelCounter = 0;
    var EventPressUpdateCounter = 0;
    var EventPrivateFinancingCounter = 0;
    var EventQuarterlyEarningsCounter = 0;
    var ExperimentalTechniqueCounter = 0;
    var GeneticAlterationCounter = 0;
    var ModalityCounter = 0;
    var MolecularTargetClassCounter = 0;
    var OrganizationCompanyCounter = 0;
    var OrganizationFundingSourceCounter = 0;
    var OrganizationResearchOrganizationCounter = 0;
    var PersonCounter = 0;
    var PredictionClinicalTrialInitiationCounter = 0;
    var PredictionClinicalTrialResultCounter = 0;
    var PredictionMilestoneCounter = 0;
    var PredictionPDFUACounter = 0;
    var ProductSalesCounter = 0;
    var ScoreCardCounter = 0;
    var SourceReferenceCounter = 0;
    var TargetCounter = 0;
    var TechnologyPlatformCounter = 0;
    var TherapeuticAreaCounter = 0;
    var TherapeuticMoleculeCounter = 0;
    var TherapeuticProductCounter = 0;

    const { loading, data, error } = useQuery(GET_COMPANY_ITEMS, {
      variables: {
        filter: {FID_S: parseInt(props.FID_S)}
      },
    })

        if(props.Name !== ""){
            return(
              <div>
                {loading && !error && <p>Loading...</p>}
                  {error && !loading && <p>Error</p>}
                  {data && !loading && !error && (
                      data.companies.map(row => {
                        //Extract multiple values into a comma-separated list to display in a single field
                        RelatedItems = row.Items;
                        row.Items.map((r) => {
                            TypeList.push(r.Type);
                            if(r.Type === "Assignment"){return AssignmentCounter = AssignmentCounter + 1};
                            if(r.Type === "BiologicalProcess"){return BiologicalProcessCounter = BiologicalProcessCounter + 1};
                            if(r.Type === "BiologicalStructure"){return BiologicalStructureCounter = BiologicalStructureCounter + 1};
                            if(r.Type === "City"){return CityCounter = CityCounter + 1};
                            if(r.Type === "ClinicalTrial"){return ClinicalTrialCounter = ClinicalTrialCounter + 1};
                            if(r.Type === "CompanyClass"){return CompanyClassCounter = CompanyClassCounter + 1};
                            if(r.Type === "Date"){return DateCounter = DateCounter + 1};
                            if(r.Type === "DevelopmentStage"){return DevelopmentStageCounter = DevelopmentStageCounter + 1};
                            if(r.Type === "Disease"){return DiseaseCounter = DiseaseCounter + 1};
                            if(r.Type === "Event:Acquisition"){return EventAcquisitionCounter = EventAcquisitionCounter + 1};
                            if(r.Type === "Event:BreakThroughTherapy"){return EventBreakThroughTherapyCounter = EventBreakThroughTherapyCounter + 1};
                            if(r.Type === "Event:BusinessReview"){return EventBusinessReviewCounter = EventBusinessReviewCounter + 1};
                            if(r.Type === "Event:CFDAApproval"){return EventCFDAApprovalCounter = EventCFDAApprovalCounter + 1};
                            if(r.Type === "Event:ClinicalTrialInitiation"){return EventClinicalTrialInitiationCounter = EventClinicalTrialInitiationCounter + 1};
                            if(r.Type === "Event:ClinicalTrialPhase"){return EventClinicalTrialPhaseCounter = EventClinicalTrialPhaseCounter + 1};
                            if(r.Type === "Event:ClinicalTrialResult"){return EventClinicalTrialResultCounter = EventClinicalTrialResultCounter + 1};
                            if(r.Type === "Event:ClinicalTrialSuspension"){return EventClinicalTrialSuspensionCounter = EventClinicalTrialSuspensionCounter + 1};
                            if(r.Type === "Event:Collaboration"){return EventCollaborationCounter = EventCollaborationCounter + 1};
                            if(r.Type === "Event:EMEAApproval"){return EventEMEAApprovalCounter = EventEMEAApprovalCounter + 1};
                            if(r.Type === "Event:FDAApproval"){return EventFDAApprovalCounter = EventFDAApprovalCounter + 1};
                            if(r.Type === "Event:FDAINDFiling"){return EventFDAINDCounter = EventFDAINDCounter + 1};
                            if(r.Type === "Event:FDANDAFiling"){return EventFDANDACounter = EventFDANDACounter + 1};
                            if(r.Type === "Event:FDAPriorityReview"){return EventFDAPriorityReviewCounter = EventFDAPriorityReviewCounter + 1};
                            if(r.Type === "Event:InitialPublicOffering"){return EventInitialPublicOfferingCounter = EventInitialPublicOfferingCounter + 1};
                            if(r.Type === "Event:MeetingPresentation"){return EventMeetingPresentationCounter = EventMeetingPresentationCounter + 1};
                            if(r.Type === "Event:NewPublicOffering"){return EventNewPublicOfferingCounter = EventNewPublicOfferingCounter + 1};
                            if(r.Type === "Event:NewPrivateFinancing"){return EventPrivateFinancingCounter = EventPrivateFinancingCounter + 1};
                            if(r.Type === "Event:OrphanDrugDesignation"){return EventOrphanDrugCounter = EventOrphanDrugCounter + 1};
                            if(r.Type === "Event:OtherApproval"){return EventOtherApprovalCounter = EventOtherApprovalCounter + 1};
                            if(r.Type === "Event:Patent"){return EventPatentCounter = EventPatentCounter + 1};
                            if(r.Type === "Event:Personnel"){return EventPersonnelCounter = EventPersonnelCounter + 1};
                            if(r.Type === "Event:PressUpdate"){return EventPressUpdateCounter = EventPressUpdateCounter + 1};
                            if(r.Type === "Event:QuarterlyEarnings"){return EventQuarterlyEarningsCounter = EventQuarterlyEarningsCounter + 1};
                            if(r.Type === "ExperimentalTechnique"){return ExperimentalTechniqueCounter = ExperimentalTechniqueCounter + 1};
                            if(r.Type === "GeneticAlteration"){return GeneticAlterationCounter = GeneticAlterationCounter + 1};
                            if(r.Type === "Modality"){return ModalityCounter = ModalityCounter + 1};
                            if(r.Type === "MolecularTargetClass"){return MolecularTargetClassCounter = MolecularTargetClassCounter + 1};
                            if(r.Type === "MolecularTarget"){return TargetCounter = TargetCounter + 1};
                            if(r.Type === "Organization:Company"){return OrganizationCompanyCounter = OrganizationCompanyCounter + 1};
                            if(r.Type === "Organization:FundingSource"){return OrganizationFundingSourceCounter = OrganizationFundingSourceCounter + 1};
                            if(r.Type === "Organization:ResearchOrganization"){return OrganizationResearchOrganizationCounter = OrganizationResearchOrganizationCounter + 1};
                            if(r.Type === "Person"){return PersonCounter = PersonCounter + 1};
                            if(r.Type === "Prediction:ClinicalTrialInitiation"){return PredictionClinicalTrialInitiationCounter = PredictionClinicalTrialInitiationCounter + 1};
                            if(r.Type === "Prediction:ClinicalTrialResult"){return PredictionClinicalTrialResultCounter = PredictionClinicalTrialResultCounter + 1};
                            if(r.Type === "Prediction:Milestone"){return PredictionMilestoneCounter = PredictionMilestoneCounter + 1};
                            if(r.Type === "Prediction:FDAPDFUA"){return PredictionPDFUACounter = PredictionPDFUACounter + 1};
                            if(r.Type === "ProductSales"){return ProductSalesCounter = ProductSalesCounter + 1};
                            if(r.Type === "ScoreCard"){return ScoreCardCounter = ScoreCardCounter + 1};
                            if(r.Type === "SourceReference"){return SourceReferenceCounter = SourceReferenceCounter + 1};
                            if(r.Type === "TechnologyPlatform"){return TechnologyPlatformCounter = TechnologyPlatformCounter + 1};
                            if(r.Type === "TherapeuticArea"){return TherapeuticAreaCounter = TherapeuticAreaCounter + 1};
                            if(r.Type === "TherapeuticMolecule"){return TherapeuticMoleculeCounter = TherapeuticMoleculeCounter + 1};
                            if(r.Type === "TherapeuticProduct"){return TherapeuticProductCounter = TherapeuticProductCounter + 1};                           
                            
                        })
                        UniqueTypeList = [...new Set(TypeList)]
                        UniqueTypeList.sort()

                        
                      return ( 
                          <React.Fragment>
                            
                            <Container maxWidth="lg">
                                <Grid container className={classes.root} spacing={2}>

                                    <Grid item xs={12}>

                                        <Grid container justify="center" spacing={spacing}>

                                        {UniqueTypeList.map((value) => (
                                            <Grid key={value} item>
                                                <Paper className={classes.paper}>
                                                    <Typography>
                                                        {value === "Assignment" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Assignment" height="50" width="50" className="image" title="Process" src="http://localhost/images/Assignment"/><br></br>{"Assignment  (" + AssignmentCounter + ")"}</Link> :

                                                        value === "BiologicalProcess" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Process" height="50" width="50" className="image" title="Process" src="http://localhost/images/BiologicalProcess"/><br></br>{"Biological Process  (" + BiologicalProcessCounter + ")"}</Link> :
                                                        
                                                        value === "BiologicalStructure" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Structure" height="50" width="50" className="image" title="Structure" src="http://localhost/images/BiologicalStructure"/><br></br>{"Biological Structure  (" + BiologicalStructureCounter + ")"}</Link> :
                                                        
                                                        value === "City" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="City" height="50" width="50" className="image" title="City" src="http://localhost/images/City"/><br></br>{"City Location     (" + CityCounter + ")"}</Link> :
                                                        
                                                        value === "ClinicalTrial" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                            <img alt="Trial" height="50" width="50" className="image" title="Clinical Trial" src="http://localhost/images/ClinicalTrial"/><br></br>{"Clinical Trial  (" + ClinicalTrialCounter + ")"}</Link> : 

                                                        value === "CompanyClass" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Class" height="50" width="50" className="image" title="Class" src="http://localhost/images/CompanyClass"/><br></br>{"Company Class  (" + CompanyClassCounter + ")"}</Link> : 

                                                        value === "Date" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Foundation Year" height="50" width="50" className="image" title="Foundation Year" src="http://localhost/images/date"/><br></br>{"Foundation Year (" + DateCounter + ")"}</Link> : 

                                                        value === "DevelopmentStage" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Stage" height="50" width="50" className="image" title="Stage" src="http://localhost/images/DevelopmentStage"/><br></br>{"Development Stage (" + DevelopmentStageCounter + ")"}</Link> : 
                                                        
                                                        value === "Disease" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Disease" height="50" width="50" className="image" title="Disease" src="http://localhost/images/Disease"/><br></br>{"Disease (" + DiseaseCounter + ")"}</Link> : 

                                                        value === "Event:Acquisition" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Acquisition" height="50" width="50" className="image" title="Acquisition" src="http://localhost/images/eventacquisition"/><br></br>{"Event: Acquisition (" + EventAcquisitionCounter + ")"}</Link> : 

                                                        value === "Event:BreakThroughTherapy" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Breakthrough" height="50" width="50" className="image" title="Breakthrough" src="http://localhost/images/eventbreakthroughtherapy"/><br></br>{"Event: Breakthrough (" + EventBreakThroughTherapyCounter + ")"}</Link> : 

                                                        value === "Event:BusinessReview" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Business Review" height="50" width="50" className="image" title="Business Review" src="http://localhost/images/eventbusinessreview"/><br></br>{"Event: Business Review (" + EventBusinessReviewCounter + ")"}</Link> : 

                                                        value === "Event:CFDAApproval" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="CFDA Approval" height="50" width="50" className="image" title="CFDA Approval" src="http://localhost/images/eventcfdaapproval"/><br></br>{"Event: CFDA Approval (" + EventCFDAApprovalCounter + ")"}</Link> : 

                                                        value === "Event:ClinicalTrialInitiation" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Trial Start" height="50" width="50" className="image" title="Clinical Trial Start" src="http://localhost/images/eventclinicaltrialinitiation"/><br></br>{"Event: Trial Start (" + EventClinicalTrialInitiationCounter + ")"}</Link> : 

                                                        value === "Event:ClinicalTrialPhase" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Trial Phase" height="50" width="50" className="image" title="Clinical Trial Phase" src="http://localhost/images/eventclinicaltrialphase"/><br></br>{"Event: Trial Phase (" + EventClinicalTrialPhaseCounter + ")"}</Link> : 

                                                        value === "Event:ClinicalTrialResult" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Trial Result" height="50" width="50" className="image" title="Clinical Trial Result" src="http://localhost/images/eventclinicaltrialresult"/><br></br>{"Event: Trial Result (" + EventClinicalTrialResultCounter + ")"}</Link> : 

                                                        value === "Event:ClinicalTrialSuspension" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Trial Suspension" height="50" width="50" className="image" title="Clinical Trial Suspension" src="http://localhost/images/eventclinicaltrialsuspension"/><br></br>{"Event: Trial Suspension (" + EventClinicalTrialSuspensionCounter + ")"}</Link> : 

                                                        value === "Event:Collaboration" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Collaboration" height="50" width="50" className="image" title="Collaboration" src="http://localhost/images/eventcollaboration"/><br></br>{"Event: Collaboration (" + EventCollaborationCounter + ")"}</Link> : 

                                                        value === "Event:EMEAApproval" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="EMEA Approval" height="50" width="50" className="image" title="EMEA Approval" src="http://localhost/images/eventemeaapproval"/><br></br>{"Event: EMEA Approval (" + EventEMEAApprovalCounter + ")"}</Link> : 

                                                        value === "Event:FDAApproval" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="FDA Approval" height="50" width="50" className="image" title="FDA Approval" src="http://localhost/images/eventfdaapproval"/><br></br>{"Event: FDA Approval (" + EventFDAApprovalCounter + ")"}</Link> : 

                                                        value === "Event:FDAINDFiling" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="IND" height="50" width="50" className="image" title="IND" src="http://localhost/images/eventfdaind"/><br></br>{"Event: FDA IND (" + EventFDAINDCounter + ")"}</Link> : 

                                                        value === "Event:FDANDAFiling" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="NDA" height="50" width="50" className="image" title="NDA" src="http://localhost/images/eventfdanda"/><br></br>{"Event: FDA NDA (" + EventFDANDACounter + ")"}</Link> : 

                                                        value === "Event:FDAPriorityReview" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Priority" height="50" width="50" className="image" title="Priority Review" src="http://localhost/images/eventfdapriorityreview"/><br></br>{"Event: FDA Priority Review(" + EventFDAPriorityReviewCounter + ")"}</Link> : 

                                                        value === "Event:InitialPublicOffering" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="IPO" height="50" width="50" className="image" title="IPO" src="http://localhost/images/eventipo"/><br></br>{"Event: IPO (" + EventInitialPublicOfferingCounter + ")"}</Link> : 

                                                        value === "Event:MeetingPresentation" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Meeting" height="50" width="50" className="image" title="Meeting" src="http://localhost/images/eventmeetingpresentation"/><br></br>{"Event: Meeting Presentation (" + EventMeetingPresentationCounter + ")"}</Link> : 

                                                        value === "Event:NewPublicOffering" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="New Public Finance" height="50" width="50" className="image" title="New Public Finance" src="http://localhost/images/eventnewpublicoffering"/><br></br>{"Event: Public Offering (" + EventNewPublicOfferingCounter + ")"}</Link> : 

                                                        value === "Event:NewPrivateFinancing" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Finance" height="50" width="50" className="image" title="Finance" src="http://localhost/images/eventnewprivatefinancing"/><br></br>{"Event: Private Financing (" + EventPrivateFinancingCounter + ")"}</Link> : 

                                                        value === "Event:OrphanDrugDesignation" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Orphan Drug" height="50" width="50" className="image" title="Orphan Drug" src="http://localhost/images/eventorphandrug"/><br></br>{"Event: FDA OrphanDrug (" + EventOrphanDrugCounter + ")"}</Link> : 

                                                        value === "Event:OtherApproval" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Other Approval" height="50" width="50" className="image" title="Other Approval" src="http://localhost/images/eventotherapproval"/><br></br>{"Event: Other Approval (" + EventOtherApprovalCounter + ")"}</Link> : 

                                                        value === "Event:Patent" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Patent" height="50" width="50" className="image" title="Patent" src="http://localhost/images/eventpatent"/><br></br>{"Event: Patent (" + EventPatentCounter + ")"}</Link> : 
                                                        
                                                        value === "Event:PressUpdate" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="PressUpdate" height="50" width="50" className="image" title="PressUpdate" src="http://localhost/images/eventpressupdate"/><br></br>{"Event: Press Update (" + EventPressUpdateCounter + ")"}</Link> : 

                                                        value === "Event:Personnel" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Personnel" height="50" width="50" className="image" title="Personnel" src="http://localhost/images/eventpersonnel"/><br></br>{"Event: Personnel (" + EventPersonnelCounter + ")"}</Link> : 

                                                        value === "Event:QuarterlyEarnings" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Earnings" height="50" width="50" className="image" title="Earnings" src="http://localhost/images/eventquarterlyearnings"/><br></br>{"Quarterly Earnings (" + EventQuarterlyEarningsCounter + ")"}</Link> : 

                                                        value === "ExperimentalTechnique" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="ExperimentalTechnique" height="50" width="50" className="image" title="ExperimentalTechnique" src="http://localhost/images/experimentaltechnique"/><br></br>{"Experimental Technique (" + ExperimentalTechniqueCounter + ")"}</Link> : 

                                                        value === "GeneticAlteration" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="GeneticAlteration" height="50" width="50" className="image" title="GeneticAlteration" src="http://localhost/images/GeneticAlteration"/>{"Genetic Alteration  (" + GeneticAlterationCounter  + ")"}</Link> :

                                                        value === "MolecularTarget" ? <Link to={`/moleculartargetlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Target" height="50" width="50" className="image" title="Molecular Target" src="http://localhost/images/MolecularTarget"/>{"Molecular Target  (" + TargetCounter  + ")"}</Link> :

                                                        value === "Modality" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Modality" height="50" width="50" className="image" title="Modality" src="http://localhost/images/Modality"/>{"Modality  (" + ModalityCounter  + ")"}</Link> :

                                                        value === "MolecularTargetClass" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="MolecularTargetClass" height="50" width="50" className="image" title="MolecularTargetClass" src="http://localhost/images/moleculartargetclass"/>{"Molecular Target Class  (" + MolecularTargetClassCounter  + ")"}</Link> :

                                                        value === "Organization:Company" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Company" height="50" width="50" className="image" title="Company" src="http://localhost/images/Company"/>{"Organization: Company  (" + OrganizationCompanyCounter  + ")"}</Link> :

                                                        value === "Organization:FundingSource" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="FundingSource" height="50" width="50" className="image" title="FundingSource" src="http://localhost/images/FundingSource"/>{"Organization: Funding Source  (" + OrganizationFundingSourceCounter  + ")"}</Link> :

                                                        value === "Organization:ResearchOrganization" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="ResearchOrganization" height="50" width="50" className="image" title="ResearchOrganization" src="http://localhost/images/ResearchOrganization"/>{"Organization: Research Organization  (" + OrganizationResearchOrganizationCounter  + ")"}</Link> :

                                                        value === "Person" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Person" height="50" width="50" className="image" title="Person" src="http://localhost/images/Person"/><br></br>{value + "     (" + PersonCounter + ")"}</Link> : 
                                                        
                                                        value === "Prediction:Milestone" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Prediction" height="50" width="50" className="image" title="Milestone" src="http://localhost/images/predictionmilestone"/>{"Prediction: Milestone (" + PredictionMilestoneCounter + ")"}</Link> :
                                                        
                                                        value === "Prediction:ClinicalTrialInitiation" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Initiation" height="50" width="50" className="image" title="ClinicalTrialInitiation" src="http://localhost/images/predictionclinicaltrialinitiation"/>{"Prediction: ClinicalTrial Initiation (" + PredictionClinicalTrialInitiationCounter + ")"}</Link> :
                                                        
                                                        value === "Prediction:ClinicalTrialResult" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Result" height="50" width="50" className="image" title="ClinicalTrialResult" src="http://localhost/images/predictionclinicaltrialresult"/>{"Prediction: ClinicalTrial Result (" + PredictionClinicalTrialResultCounter + ")"}</Link> :
                                                        
                                                        value === "Prediction:FDAPDFUA" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Prediction" height="50" width="50" className="image" title="Prediction" src="http://localhost/images/fdapdfua"/>{"Prediction: PDFUA (" + PredictionPDFUACounter + ")"}</Link> :
                                                        
                                                        value === "ProductSales" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Sales" height="50" width="50" className="image" title="Sales" src="http://localhost/images/ProductSales"/>{"Product Sales (" + ProductSalesCounter + ")"}</Link> :

                                                        value === "ScoreCard" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="ScoreCard" height="50" width="50" className="image" title="ScoreCard" src="http://localhost/images/ScoreCard"/>{"ScoreCard (" + ScoreCardCounter + ")"}</Link> :

                                                        value === "SourceReference" ? <Link to={`/sourcereferencelist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Source" height="50" width="50" className="image" title="Source" src="http://localhost/images/SourceReference"/>{"SourceReference (" + SourceReferenceCounter + ")"}</Link> :
                                                        
                                                        value === "TherapeuticArea" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Therapeutic Area" height="50" width="50" className="image" title="Therapeutic Area" src="http://localhost/images/TherapeuticArea"/>{"Therapeutic Area (" + TherapeuticAreaCounter + ")"}</Link> :

                                                        value === "TechnologyPlatform" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Platform" height="50" width="50" className="image" title="Platform" src="http://localhost/images/TechnologyPlatform"/>{"Technology Platform (" + TechnologyPlatformCounter + ")"}</Link> :

                                                        value === "TherapeuticMolecule" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Molecule" height="50" width="50" className="image" title="Therapeutic Molecule" src="http://localhost/images/TherapeuticMolecule"/>{"Therapeutic Molecule (" + TherapeuticMoleculeCounter + ")"}</Link> :
                                                        
                                                        value === "TherapeuticProduct" ? <Link to={`/companyrelateditemlist/${row.FID_S + "-" + value}`} >
                                                        <img alt="Product" height="50" width="50" className="image" title="Product" src="http://localhost/images/TherapeuticProduct"/><br></br>{"Therapeutic Product (" + TherapeuticProductCounter + ")"}</Link> :

                                                        ""}
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

export default CompanyItems2;