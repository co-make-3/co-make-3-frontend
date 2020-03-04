// Package imports
import React from 'react'
import { Route } from 'react-router-dom'

// Component Imports
import DashboardProfile from './DashboardProfile'
import NewPost from './UserPost'
import ViewPosts from './ViewPosts'
import Activity from './Activities'


function DashboardNav() {
    
    return (
        <div className="dashboard-content">
            <Route exact path="/dashboard/:id" render={renderProps => {
                return (
                    <div className="row">
                        <div className="col-12">
            
                            <div className="row page-title">
                                <div className="col-12 text-left">
                                    <h1>Welcome</h1>     
                                </div>
                            </div>
            
                        </div>
                    </div>
                )
            }} />
            <Route exact path="/dashboard/:id/profile" render={renderProps => {
                return <DashboardProfile {...renderProps} />
            }} />
            <Route exact path="/dashboard/:id/view-posts" render={renderProps => {
                return <ViewPosts {...renderProps} />
            }} />
            <Route exact path="/dashboard/:id/new-post" render={renderProps => {
                return <NewPost {...renderProps} />
            }} />
            <Route exact path="/dashboard/:id/activity" render={renderProps => {
                return <Activity {...renderProps} />
            }} />
        </div>
    )
}

export default DashboardNav