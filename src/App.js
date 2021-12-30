import React, { Component, Suspense } from 'react';
import './App.css';

//import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import Nav from './Components/Nav';

const About = React.lazy(() => import("./Components/About"));
const Home = React.lazy(() => import("./Components/Home"));
const Test = React.lazy(() => import("./Components/Test"));
const ItemList = React.lazy(() => import("./Components/ItemList"));
const ItemDetail = React.lazy(() => import("./Components/ItemDetail"));
const ItemCountList = React.lazy(() => import("./Components/ItemCountList"));
const BiologicalProcessList = React.lazy(() => import("./Components/BiologicalProcessList"));
const BiologicalProcessDetail = React.lazy(() => import("./Components/BiologicalProcessDetail"));
const ClinicalTrialList = React.lazy(() => import("./Components/ClinicalTrialList"));
const ClinicalTrialDetail = React.lazy(() => import("./Components/ClinicalTrialDetail"));
const CompanyClassList = React.lazy(() => import("./Components/CompanyClassList"));
const CompanyClassDetail = React.lazy(() => import("./Components/CompanyClassDetail"));
const CompanyList = React.lazy(() => import("./Components/CompanyList"));
const CompanySummary = React.lazy(() => import("./Components/CompanySummary"));
const CompanyRelatedItemList = React.lazy(() => import("./Components/CompanyRelatedItemList"));
const MolecularTargetList = React.lazy(() => import("./Components/MolecularTargetList"));
const MolecularTargetDetail = React.lazy(() => import("./Components/MolecularTargetDetail"));
const TherapeuticMoleculeList = React.lazy(() => import("./Components/TherapeuticMoleculeList"));
const TherapeuticMoleculeDetail = React.lazy(() => import("./Components/TherapeuticMoleculeDetail"));
const TherapeuticProductList = React.lazy(() => import("./Components/TherapeuticProductList"));
const TherapeuticProductDetail = React.lazy(() => import("./Components/TherapeuticProductDetail"));
const DiseaseList = React.lazy(() => import("./Components/DiseaseList"));
const DiseaseDetail = React.lazy(() => import("./Components/DiseaseDetail"));
const SourceReferenceList = React.lazy(() => import("./Components/SourceReferenceList"));
const SourceReferenceDetail = React.lazy(() => import("./Components/SourceReferenceDetail"));
const PredictionList = React.lazy(() => import("./Components/PredictionList"));
const PredictionCalendar = React.lazy(() => import("./Components/PredictionCalendar"));
const ScoreCardList = React.lazy(() => import("./Components/ScoreCardList"));
const QandA = React.lazy(() => import("./Components/QandA/QandA"));
const CompanyByBioStructureList = React.lazy(() => import("./Components/QandA/CompanyByBioStructureList"));

class App extends Component{

  render(){
      return(

              <div className="App">
                <Suspense fallback={<>...</>}>
                  <Nav className="nav-links"/>
                  <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/home" element={<Home />}/>
                        <Route path="/test" element={<Test />}/>
                        <Route path="/biologicalprocesslist"  element={<BiologicalProcessList />}/>
                        <Route path="/biologicalprocessdetail/:id"  element={<BiologicalProcessDetail />}/>
                        <Route path="/clinicaltriallist"  element={<ClinicalTrialList />}/>
                        <Route path="/clinicaltrialdetail/:id"  element={<ClinicalTrialDetail />}/>
                        <Route path="/companylist"  element={<CompanyList />}/>
                        <Route path="/companyclasslist"  element={<CompanyClassList />}/>
                        <Route path="/companyclassdetail/:id"  element={<CompanyClassDetail />}/>
                        <Route path="/companysummary/:id"  element={<CompanySummary />}/>
                        <Route path="/diseaselist"  element={<DiseaseList />}/>
                        <Route path="/diseasedetail/:id"  element={<DiseaseDetail />}/>
                        <Route path="/itemlist"  element={<ItemList />}/>
                        <Route path="/itemdetail/:id"  element={<ItemDetail />}/>
                        <Route path="/itemcountlist/:id"  element={<ItemCountList />}/>
                        <Route path="/moleculartargetlist"  element={<MolecularTargetList />}/>
                        <Route path="/moleculartargetdetail/:id"  element={<MolecularTargetDetail />}/>
                        <Route path="/therapeuticmoleculelist"  element={<TherapeuticMoleculeList />}/>
                        <Route path="/therapeuticmoleculedetail/:id"  element={<TherapeuticMoleculeDetail />}/>
                        <Route path="/therapeuticproductlist"  element={<TherapeuticProductList />}/>
                        <Route path="/therapeuticproductdetail/:id"  element={<TherapeuticProductDetail />}/>
                        <Route path="/qanda/qanda"  element={<QandA />}/>
                        <Route path="/qanda/companybybiostructurelist"  element={<CompanyByBioStructureList />}/>
                        <Route path="/companyrelateditemlist/:id"  element={<CompanyRelatedItemList />}/>
                        <Route path="/predictionlist"  element={<PredictionList />}/>
                        <Route path="/predictioncalendar"  element={<PredictionCalendar />}/>
                        <Route path="/scorecardlist"  element={<ScoreCardList />}/>
                        <Route path="/sourcereferencelist"  element={<SourceReferenceList />}/>
                        <Route path="/sourcereferencedetail/:id"  element={<SourceReferenceDetail />}/>
                  </Routes>
                  </Suspense>
              </div>

      )
  }
}

export default App;
