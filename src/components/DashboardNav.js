// Package imports
import React from 'react'

// Component Imports
import DashNavItem from './DashboardNavItem'


function DashboardNav(props) {

    return (
        <div className="dashboard-nav">
            <div className="row dashboard-nav-logo-wrapper">
                <div className="col">
                    <img className="logo" alt="co-make logo" src="/images/co-make-logo.png" />
                </div>
            </div>
            <div className="row dashboard-nav-wrapper-outer">
                <div className="col dashboard-nav-wrapper-inner">
                    <ul className="nav">
                        <DashNavItem link="/dashboard/:id" title="Home" />
                        <DashNavItem link="/dashboard/:id/profile" title="Profile" />
                        <DashNavItem link="/dashboard/:id/new-post" title="New Post" />
                        <DashNavItem link="/dashboard/:id/view-posts" title="View Posts" />
                        <DashNavItem link="/dashboard/:id/activity" title="My Activities" />
                        <DashNavItem link="/login" title="Logout" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardNav