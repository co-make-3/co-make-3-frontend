// Package imports
import React from 'react'
import {Link} from 'react-router-dom'

// Component Imports


function DashboardNavLink(props) {
    return (
        <li>
            <i class={props.faIcon}></i><Link className={props.isActive} to={props.link}>{props.title}</Link>
        </li>
    )
}

export default DashboardNavLink