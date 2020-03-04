// Package imports
import React from 'react'
//import { Route, Redirect } from 'react-router-dom'

// Component Imports
import DashNav from './DashboardNav'
import DashContent from './DashboardContent'


function Dashboard(props) {
    return (
        <div className="dashboard-wrapper">
            <DashNav />
            <DashContent />
        </div>
    )
}

export default Dashboard