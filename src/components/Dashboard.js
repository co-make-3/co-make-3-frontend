// Package imports
import React from 'react'
import { Route, Link } from 'react-router-dom'

// Component Imports
import DashNav from './DashboardNav'
import DashContent from './DashboardContent'


function Dashboard() {
    return (
        <div className="dashboard-wrapper">
            <DashNav />
            <DashContent />
        </div>
    )
}

export default Dashboard