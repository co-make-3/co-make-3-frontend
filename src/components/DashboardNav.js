// Package imports
import React from 'react'

// Component Imports
import DashNavItem from './DashboardNavItem'

function DashboardNav() {
    return (
        <div className="dashboard-nav">
            <div className="row dashboard-nav-logo-wrapper">
                <div className="col">
                    <img className="logo" alt="co-make logo" src="images/co-make-logo.png" />
                </div>
            </div>
            <div className="row dashboard-nav-wrapper-outer">
                <div className="col dashboard-nav-wrapper-inner">
                    <ul className="nav">
                        <DashNavItem link="dashboard/" title="Home" isActive={"active"} faIcon={"fas fa-tachometer-alt"}/>
                        <DashNavItem link="dashboard/" title="Home" isActive={""}/>
                        <DashNavItem link="dashboard/" title="Home" isActive={""}/>
                        <DashNavItem link="dashboard/" title="Home" isActive={""}/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardNav