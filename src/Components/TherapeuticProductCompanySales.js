import React from 'react';
import TherapeuticProductSalesQuery from './TherapeuticProductSalesQuery'

export default function TherapeuticProductCompanySales (props){

    return(
        props.CompanyProducts.map(r => (
            <TherapeuticProductSalesQuery Name={r.Name}/>
        ))
    )
}