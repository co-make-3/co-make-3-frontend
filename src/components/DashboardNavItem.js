// Package imports
import React from 'react'
import {NavLink} from 'react-router-dom'

// Component Imports


function DashboardNavLink(props) {
    console.log('LocalStorage - id: ', localStorage.id)
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        localStorage.removeItem('password')
    }

    if (props.handleLogout !== "yes") {    
        return (
            <li>
                <NavLink exact to={props.link}>{props.title}</NavLink>
            </li>
        )
    } else {
        return (
            <li>
                <NavLink exact to={props.link} onClick={handleLogout()}>{props.title}</NavLink>
            </li>
        )
    }
}

export default DashboardNavLink