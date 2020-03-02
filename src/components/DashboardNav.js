// Package imports
import React from 'react'
import { Location } from 'react-router-dom'

// Component Imports
import DashNavItem from './DashboardNavItem'

function DashboardNav() {
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
                        <DashNavItem link="/dashboard" title="Home" isActive={"active"} />
                        <DashNavItem link="/dashboard/profile" title="Profile" isActive={""} />
                        <DashNavItem link="/dashboard/new-post" title="New Post" isActive={""} />
                        <DashNavItem link="/dashboard/view-posts" title="View Posts" isActive={""} />
                        <DashNavItem link="/dashboard/activity" title="My Activities" isActive={""} />
                        <DashNavItem link="/" title="Logout" isActive={""} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardNav