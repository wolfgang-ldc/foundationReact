import React from 'react'
import {Link} from 'react-router-dom'

const QandA = () => {
    return(
        <div>
            <ul>
                <Link to={'/qanda/companybybiostructurelist/'}>
                    <li>Find Company by Biological Structure</li>
                </Link>
            </ul>
        </div>
    )
}

export default QandA;