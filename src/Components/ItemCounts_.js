import React from 'react'
import {Link} from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 130,
    width: 105,
    align: "left"
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function ItemCounts(props){
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
    var DiagnosticKitCounter = 0;
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
    var InteractionCounter = 0;
    var KnowledgeUnitCounter = 0;
    var ModalityCounter = 0;
    var MolecularTargetClassCounter = 0;
    var OrganizationCompanyCounter = 0;
    var OrganizationFundingSourceCounter = 0;
    var OrganizationResearchOrganizationCounter = 0;
    var PathwayCounter = 0;
    var PersonCounter = 0;
    var PredictionClinicalTrialInitiationCounter = 0;
    var PredictionClinicalTrialResultCounter = 0;
    var PredictionMilestoneCounter = 0;
    var PredictionPDFUACounter = 0;
    var ProductSalesCounter = 0;
    var ScienceProjectCounter = 0;
    var ScoreCardCounter = 0;
    var SourceReferenceCounter = 0;
    var TargetCounter = 0;
    var TechnologyPlatformCounter = 0;
    var TherapeuticAreaCounter = 0;
    var TherapeuticMoleculeCounter = 0;
    var TherapeuticMoleculeClassCounter = 0;
    var TherapeuticProductCounter = 0;
    var UnknownCounter = 0;

    

    return (

           props.ItemList.map((r) => {
            TypeList.push(r.Type);
            if(r.Type === "Assignment"){return AssignmentCounter = AssignmentCounter + 1};
            if(r.Type === "BiologicalProcess"){return BiologicalProcessCounter = BiologicalProcessCounter + 1};
            if(r.Type === "BiologicalStructure"){return BiologicalStructureCounter = BiologicalStructureCounter + 1};
            if(r.Type === "City"){return CityCounter = CityCounter + 1};
            if(r.Type === "ClinicalTrial"){return ClinicalTrialCounter = ClinicalTrialCounter + 1};
            if(r.Type === "CompanyClass"){return CompanyClassCounter = CompanyClassCounter + 1};
            if(r.Type === "Date"){return DateCounter = DateCounter + 1};
            if(r.Type === "DevelopmentStage"){return DevelopmentStageCounter = DevelopmentStageCounter + 1};
            if(r.Type === "DiagnosticKit"){return DiagnosticKitCounter = DiagnosticKitCounter + 1};
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
            if(r.Type === "Interaction"){return InteractionCounter = InteractionCounter + 1};
            if(r.Type === "Modality"){return ModalityCounter = ModalityCounter + 1};
            if(r.Type === "MolecularTargetClass"){return MolecularTargetClassCounter = MolecularTargetClassCounter + 1};
            if(r.Type === "MolecularTarget"){return TargetCounter = TargetCounter + 1};
            if(r.Type === "Organization:Company"){return OrganizationCompanyCounter = OrganizationCompanyCounter + 1};
            if(r.Type === "Organization:FundingSource"){return OrganizationFundingSourceCounter = OrganizationFundingSourceCounter + 1};
            if(r.Type === "Organization:ResearchOrganization"){return OrganizationResearchOrganizationCounter = OrganizationResearchOrganizationCounter + 1};
            if(r.Type === "Pathway"){return PathwayCounter = PathwayCounter + 1};
            if(r.Type === "Person"){return PersonCounter = PersonCounter + 1};
            if(r.Type === "Prediction:ClinicalTrialInitiation"){return PredictionClinicalTrialInitiationCounter = PredictionClinicalTrialInitiationCounter + 1};
            if(r.Type === "Prediction:ClinicalTrialResult"){return PredictionClinicalTrialResultCounter = PredictionClinicalTrialResultCounter + 1};
            if(r.Type === "Prediction:Milestone"){return PredictionMilestoneCounter = PredictionMilestoneCounter + 1};
            if(r.Type === "Prediction:FDAPDFUA"){return PredictionPDFUACounter = PredictionPDFUACounter + 1};
            if(r.Type === "ProductSales"){return ProductSalesCounter = ProductSalesCounter + 1};
            if(r.Type === "ScienceProject"){return ScienceProjectCounter = ScienceProjectCounter + 1};
            if(r.Type === "ScoreCard"){return ScoreCardCounter = ScoreCardCounter + 1};
            if(r.Type === "SourceReference"){return SourceReferenceCounter = SourceReferenceCounter + 1};
            if(r.Type === "TechnologyPlatform"){return TechnologyPlatformCounter = TechnologyPlatformCounter + 1};
            if(r.Type === "TherapeuticArea"){return TherapeuticAreaCounter = TherapeuticAreaCounter + 1};
            if(r.Type === "TherapeuticMolecule"){return TherapeuticMoleculeCounter = TherapeuticMoleculeCounter + 1};
            if(r.Type === "TherapeuticMoleculeClass"){return TherapeuticMoleculeClassCounter = TherapeuticMoleculeClassCounter + 1};
            if(r.Type === "TherapeuticProduct"){return TherapeuticProductCounter = TherapeuticProductCounter + 1};                          
            
        }),

        UniqueTypeList = [...new Set(TypeList)],
        UniqueTypeList.sort(),


        UniqueTypeList.map((n) => {
            return(
              <React.Fragment>                           
                <Container maxWidth="lg">
                  <Grid container className={classes.root} spacing={2}>
                      <Grid item xs={12}>
                          <Grid container justify="center" spacing={spacing}>
                              <Grid key={n} item>
                                  <Paper className={classes.paper}>
                                    <Typography>
                                        {n === "Disease" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                              <img alt="Product" height="50" width="50" className="image" title="Product" src="http://localhost/images/TherapeuticProduct"/><br></br>{"Disease (" + DiseaseCounter + ")"}</Link> :
                                          n === "BiologicalProcess" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                              <img alt="Product" height="50" width="50" className="image" title="Product" src="http://localhost/images/BiologicalProcess"/><br></br>{"Biological Process (" + BiologicalProcessCounter + ")"}</Link> :                                
                                          n === "BiologicalStructure" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                              <img alt="Product" height="50" width="50" className="image" title="Product" src="http://localhost/images/BiologicalStructure"/><br></br>{"Biological Structure (" + BiologicalStructureCounter + ")"}</Link> :                                
                                          n === "Interaction" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                              <img alt="Product" height="50" width="50" className="image" title="Product" src="http://localhost/images/TherapeuticProduct"/><br></br>{"Interaction (" + InteractionCounter + ")"}</Link> :  
                                                                            
                                          n === "City" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="City" height="50" width="50" className="image" title="City" src="http://localhost/images/City"/><br></br>{"City Location     (" + CityCounter + ")"}</Link> :

                                          n === "ClinicalTrial" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                              <img alt="Trial" height="50" width="50" className="image" title="Clinical Trial" src="http://localhost/images/ClinicalTrial"/><br></br>{"Clinical Trial  (" + ClinicalTrialCounter + ")"}</Link> : 

                                          n === "CompanyClass" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Class" height="50" width="50" className="image" title="Class" src="http://localhost/images/CompanyClass"/><br></br>{"Company Class  (" + CompanyClassCounter + ")"}</Link> : 

                                          n === "Date" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Foundation Year" height="50" width="50" className="image" title="Foundation Year" src="http://localhost/images/date"/><br></br>{"Foundation Year (" + DateCounter + ")"}</Link> : 

                                          n === "DevelopmentStage" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Stage" height="50" width="50" className="image" title="Stage" src="http://localhost/images/DevelopmentStage"/><br></br>{"Development Stage (" + DevelopmentStageCounter + ")"}</Link> : 

                                          n === "DevelopmentStage" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Stage" height="50" width="50" className="image" title="Stage" src="http://localhost/images/DevelopmentStage"/><br></br>{"Development Stage (" + DevelopmentStageCounter + ")"}</Link> : 

                                          n === "DiagnosticKit" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="DiagnosticKit" height="50" width="50" className="image" title="DiagnosticKit" src="http://localhost/images/DiagnosticKit"/><br></br>{"DiagnosticKit (" + DiagnosticKitCounter + ")"}</Link> : 

                                          n === "Event:Acquisition" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Acquisition" height="50" width="50" className="image" title="Acquisition" src="http://localhost/images/eventacquisition"/><br></br>{"Event: Acquisition (" + EventAcquisitionCounter + ")"}</Link> : 

                                          n === "Event:BreakThroughTherapy" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Breakthrough" height="50" width="50" className="image" title="Breakthrough" src="http://localhost/images/eventbreakthroughtherapy"/><br></br>{"Event: Breakthrough (" + EventBreakThroughTherapyCounter + ")"}</Link> : 

                                          n === "Event:BusinessReview" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Business Review" height="50" width="50" className="image" title="Business Review" src="http://localhost/images/eventbusinessreview"/><br></br>{"Event: Business Review (" + EventBusinessReviewCounter + ")"}</Link> : 

                                          n === "Event:CFDAApproval" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="CFDA Approval" height="50" width="50" className="image" title="CFDA Approval" src="http://localhost/images/eventcfdaapproval"/><br></br>{"Event: CFDA Approval (" + EventCFDAApprovalCounter + ")"}</Link> : 

                                          n === "Event:ClinicalTrialInitiation" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Trial Start" height="50" width="50" className="image" title="Clinical Trial Start" src="http://localhost/images/eventclinicaltrialinitiation"/><br></br>{"Event: Trial Start (" + EventClinicalTrialInitiationCounter + ")"}</Link> : 

                                          n === "Event:ClinicalTrialPhase" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Trial Phase" height="50" width="50" className="image" title="Clinical Trial Phase" src="http://localhost/images/eventclinicaltrialphase"/><br></br>{"Event: Trial Phase (" + EventClinicalTrialPhaseCounter + ")"}</Link> : 

                                          n === "Event:ClinicalTrialResult" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Trial Result" height="50" width="50" className="image" title="Clinical Trial Result" src="http://localhost/images/eventclinicaltrialresult"/><br></br>{"Event: Trial Result (" + EventClinicalTrialResultCounter + ")"}</Link> : 

                                          n === "Event:ClinicalTrialSuspension" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Trial Suspension" height="50" width="50" className="image" title="Clinical Trial Suspension" src="http://localhost/images/eventclinicaltrialsuspension"/><br></br>{"Event: Trial Suspension (" + EventClinicalTrialSuspensionCounter + ")"}</Link> : 

                                          n === "Event:Collaboration" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Collaboration" height="50" width="50" className="image" title="Collaboration" src="http://localhost/images/eventcollaboration"/><br></br>{"Event: Collaboration (" + EventCollaborationCounter + ")"}</Link> : 

                                          n === "Event:EMEAApproval" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="EMEA Approval" height="50" width="50" className="image" title="EMEA Approval" src="http://localhost/images/eventemeaapproval"/><br></br>{"Event: EMEA Approval (" + EventEMEAApprovalCounter + ")"}</Link> : 

                                          n === "Event:FDAApproval" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="FDA Approval" height="50" width="50" className="image" title="FDA Approval" src="http://localhost/images/eventfdaapproval"/><br></br>{"Event: FDA Approval (" + EventFDAApprovalCounter + ")"}</Link> : 

                                          n === "Event:FDAINDFiling" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="IND" height="50" width="50" className="image" title="IND" src="http://localhost/images/eventfdaind"/><br></br>{"Event: FDA IND (" + EventFDAINDCounter + ")"}</Link> : 

                                          n === "Event:FDANDAFiling" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="NDA" height="50" width="50" className="image" title="NDA" src="http://localhost/images/eventfdanda"/><br></br>{"Event: FDA NDA (" + EventFDANDACounter + ")"}</Link> : 

                                          n === "Event:FDAPriorityReview" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Priority" height="50" width="50" className="image" title="Priority Review" src="http://localhost/images/eventfdapriorityreview"/><br></br>{"Event: FDA Priority Review(" + EventFDAPriorityReviewCounter + ")"}</Link> : 

                                          n === "Event:InitialPublicOffering" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="IPO" height="50" width="50" className="image" title="IPO" src="http://localhost/images/eventipo"/><br></br>{"Event: IPO (" + EventInitialPublicOfferingCounter + ")"}</Link> : 

                                          n === "Event:MeetingPresentation" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Meeting" height="50" width="50" className="image" title="Meeting" src="http://localhost/images/eventmeetingpresentation"/><br></br>{"Event: Meeting Presentation (" + EventMeetingPresentationCounter + ")"}</Link> : 

                                          n === "Event:NewPublicOffering" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="New Public Finance" height="50" width="50" className="image" title="New Public Finance" src="http://localhost/images/eventnewpublicoffering"/><br></br>{"Event: Public Offering (" + EventNewPublicOfferingCounter + ")"}</Link> : 

                                          n === "Event:NewPrivateFinancing" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Finance" height="50" width="50" className="image" title="Finance" src="http://localhost/images/eventnewprivatefinancing"/><br></br>{"Event: Private Financing (" + EventPrivateFinancingCounter + ")"}</Link> : 

                                          n === "Event:OrphanDrugDesignation" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Orphan Drug" height="50" width="50" className="image" title="Orphan Drug" src="http://localhost/images/eventorphandrug"/><br></br>{"Event: FDA OrphanDrug (" + EventOrphanDrugCounter + ")"}</Link> : 

                                          n === "Event:OtherApproval" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Other Approval" height="50" width="50" className="image" title="Other Approval" src="http://localhost/images/eventotherapproval"/><br></br>{"Event: Other Approval (" + EventOtherApprovalCounter + ")"}</Link> : 

                                          n === "Event:Patent" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Patent" height="50" width="50" className="image" title="Patent" src="http://localhost/images/eventpatent"/><br></br>{"Event: Patent (" + EventPatentCounter + ")"}</Link> : 

                                          n === "Event:PressUpdate" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="PressUpdate" height="50" width="50" className="image" title="PressUpdate" src="http://localhost/images/eventpressupdate"/><br></br>{"Event: Press Update (" + EventPressUpdateCounter + ")"}</Link> : 

                                          n === "Event:Personnel" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Personnel" height="50" width="50" className="image" title="Personnel" src="http://localhost/images/eventpersonnel"/><br></br>{"Event: Personnel (" + EventPersonnelCounter + ")"}</Link> : 

                                          n === "Event:QuarterlyEarnings" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Earnings" height="50" width="50" className="image" title="Earnings" src="http://localhost/images/eventquarterlyearnings"/><br></br>{"Quarterly Earnings (" + EventQuarterlyEarningsCounter + ")"}</Link> : 

                                          n === "ExperimentalTechnique" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="ExperimentalTechnique" height="50" width="50" className="image" title="ExperimentalTechnique" src="http://localhost/images/experimentaltechnique"/><br></br>{"Experimental Technique (" + ExperimentalTechniqueCounter + ")"}</Link> : 

                                          n === "GeneticAlteration" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="GeneticAlteration" height="50" width="50" className="image" title="GeneticAlteration" src="http://localhost/images/GeneticAlteration"/>{"Genetic Alteration  (" + GeneticAlterationCounter  + ")"}</Link> :

                                          n === "MolecularTarget" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Target" height="50" width="50" className="image" title="Molecular Target" src="http://localhost/images/MolecularTarget"/>{"Molecular Target  (" + TargetCounter  + ")"}</Link> :

                                          n === "Modality" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Modality" height="50" width="50" className="image" title="Modality" src="http://localhost/images/Modality"/>{"Modality  (" + ModalityCounter  + ")"}</Link> :

                                          n === "MolecularTargetClass" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="MolecularTargetClass" height="50" width="50" className="image" title="MolecularTargetClass" src="http://localhost/images/moleculartargetclass"/>{"Molecular Target Class  (" + MolecularTargetClassCounter  + ")"}</Link> :

                                          n === "Organization:Company" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Company" height="50" width="50" className="image" title="Company" src="http://localhost/images/Company"/>{"Organization: Company  (" + OrganizationCompanyCounter  + ")"}</Link> :

                                          n === "Organization:FundingSource" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="FundingSource" height="50" width="50" className="image" title="FundingSource" src="http://localhost/images/FundingSource"/>{"Organization: Funding Source  (" + OrganizationFundingSourceCounter  + ")"}</Link> :

                                          n === "Organization:ResearchOrganization" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="ResearchOrganization" height="50" width="50" className="image" title="ResearchOrganization" src="http://localhost/images/ResearchOrganization"/>{"Organization: Research Organization  (" + OrganizationResearchOrganizationCounter  + ")"}</Link> :

                                          n === "Pathway" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Pathway" height="50" width="50" className="image" title="Pathway" src="http://localhost/images/Pathway"/><br></br>{n + "     (" + PathwayCounter + ")"}</Link> : 

                                          n === "Person" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Person" height="50" width="50" className="image" title="Person" src="http://localhost/images/Person"/><br></br>{n + "     (" + PersonCounter + ")"}</Link> : 

                                          n === "Prediction:Milestone" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Prediction" height="50" width="50" className="image" title="Milestone" src="http://localhost/images/predictionmilestone"/>{"Prediction: Milestone (" + PredictionMilestoneCounter + ")"}</Link> :

                                          n === "Prediction:ClinicalTrialInitiation" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Initiation" height="50" width="50" className="image" title="ClinicalTrialInitiation" src="http://localhost/images/predictionclinicaltrialinitiation"/>{"Prediction: ClinicalTrial Initiation (" + PredictionClinicalTrialInitiationCounter + ")"}</Link> :

                                          n === "Prediction:ClinicalTrialResult" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Result" height="50" width="50" className="image" title="ClinicalTrialResult" src="http://localhost/images/predictionclinicaltrialresult"/>{"Prediction: ClinicalTrial Result (" + PredictionClinicalTrialResultCounter + ")"}</Link> :

                                          n === "Prediction:FDAPDFUA" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Prediction" height="50" width="50" className="image" title="Prediction" src="http://localhost/images/fdapdfua"/>{"Prediction: PDFUA (" + PredictionPDFUACounter + ")"}</Link> :

                                          n === "ProductSales" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Sales" height="50" width="50" className="image" title="Sales" src="http://localhost/images/ProductSales"/>{"Product Sales (" + ProductSalesCounter + ")"}</Link> :

                                          n === "ScienceProject" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="ScienceProject" height="50" width="50" className="image" title="ScoreCard" src="http://localhost/images/ScienceProject"/>{"Science Project (" + ScienceProjectCounter + ")"}</Link> :

                                          n === "ScoreCard" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="ScoreCard" height="50" width="50" className="image" title="ScoreCard" src="http://localhost/images/ScoreCard"/>{"ScoreCard (" + ScoreCardCounter + ")"}</Link> :

                                          n === "SourceReference" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Source" height="50" width="50" className="image" title="Source" src="http://localhost/images/SourceReference"/>{"Source Reference (" + SourceReferenceCounter + ")"}</Link> :

                                          n === "TherapeuticArea" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Therapeutic Area" height="50" width="50" className="image" title="Therapeutic Area" src="http://localhost/images/TherapeuticArea"/>{"Therapeutic Area (" + TherapeuticAreaCounter + ")"}</Link> :

                                          n === "TechnologyPlatform" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Platform" height="50" width="50" className="image" title="Platform" src="http://localhost/images/TechnologyPlatform"/>{"Technology Platform (" + TechnologyPlatformCounter + ")"}</Link> :

                                          n === "TherapeuticMolecule" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Molecule" height="50" width="50" className="image" title="Therapeutic Molecule" src="http://localhost/images/TherapeuticMolecule"/>{"Therapeutic Molecule (" + TherapeuticMoleculeCounter + ")"}</Link> :

                                          n === "TherapeuticMoleculeClass" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Molecule Class" height="50" width="50" className="image" title="Therapeutic Molecule Class" src="http://localhost/images/TherapeuticMoleculeClass"/>{"Therapeutic Molecule Class (" + TherapeuticMoleculeClassCounter + ")"}</Link> :

                                          n === "TherapeuticProduct" ? <Link to={`/itemcountlist/${"[" + props.SearchValue + "]-" + n}`} >
                                          <img alt="Product" height="50" width="50" className="image" title="Product" src="http://localhost/images/TherapeuticProduct"/><br></br>{"Therapeutic Product (" + TherapeuticProductCounter + ")"}</Link> :

                                          ""}
                                    </Typography>
                                  </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
              </React.Fragment>
            )
        }

        )
    
    )
}


export default ItemCounts;