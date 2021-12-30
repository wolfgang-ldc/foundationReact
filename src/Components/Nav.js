import React from 'react'
import "./Nav.css";
import {Link} from "react-router-dom";

function Nav () {
    const navStyle = {
        color: 'white',
    }

    return(
        <nav className="Nav">
            <h3><img alt="Live Data Concepts" height="50" width="50" className="image" src="http://localhost/images/LiveDataConcepts"/>  DDIG - Drug Development Insight Graph</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
                <Link style={navStyle} to='/home'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/test'>
                    <li>Test</li>
                </Link>
                <Link style={navStyle} to='/itemlist'>
                    <li><img alt="Item" height="25" width="25" className="image" title="Item" src="http://localhost/images/globalsearch"/></li>
                </Link>
                <Link style={navStyle} to='/companylist'>
                    <li><img alt="Company" height="25" width="25" className="image" title="Company" src="http://localhost/images/Company"/></li>
                </Link>
                <Link style={navStyle} to='/companyclasslist'>
                    <li><img alt="Company Class" height="25" width="25" className="image" title="Company Class" src="http://localhost/images/CompanyClass"/></li>
                </Link>
                <Link style={navStyle} to='/therapeuticmoleculelist'>
                    <li><img alt="Molecule" height="25" width="25" className="image" title="Therapeutic Molecule" src="http://localhost/images/TherapeuticMolecule"/></li>
                </Link>
                <Link style={navStyle} to='/moleculartargetlist'>
                    <li><img alt="Target" height="25" width="25" className="image" title="Molecular Target" src="http://localhost/images/MolecularTarget"/></li>
                </Link>
                <Link style={navStyle} to='/diseaselist'>
                    <li><img alt="Disease" height="25" width="25" className="image" title="Disease" src="http://localhost/images/Disease"/></li>
                </Link>
                <Link style={navStyle} to='/clinicaltriallist'>
                    <li><img alt="Trial" height="25" width="25" className="image" title="Clinical Trial" src="http://localhost/images/ClinicalTrial"/></li>
                </Link>
                <Link style={navStyle} to='/therapeuticproductlist'>
                    <li><img alt="Product" height="25" width="25" className="image" title="Product" src="http://localhost/images/TherapeuticProduct"/></li>
                </Link>
                <Link style={navStyle} to='/predictionlist'>
                    <li><img alt="Prediction Search" height="25" width="25" className="image" title="Prediction Search" src="http://localhost/images/Prediction"/></li>
                </Link>
                <Link style={navStyle} to='/predictioncalendar'>
                    <li><img alt="Prediction Calendar" height="25" width="25" className="image" title="Prediction Calendar" src="http://localhost/images/Prediction"/></li>
                </Link>
                <Link style={navStyle} to='/sourcereferencelist'>
                    <li><img alt="Reference" height="25" width="25" className="image" title="Reference" src="http://localhost/images/SourceReference"/></li>
                </Link>
                <Link style={navStyle} to='/qanda/qanda'>
                    <li><img alt="Q and A" height="25" width="25" className="image" title="Question and Answer" src="http://localhost/images/QandA"/></li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;