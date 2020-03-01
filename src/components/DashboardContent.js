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
            <Route exact path="/dashboard" render={renderProps => {
                return (
                    <h1>Welcome</h1>
                )
            }} />
            <Route exact path="/dashboard/profile" render={renderProps => {
                return <DashboardProfile />
            }} />
            <Route exact path="/dashboard/view-posts" render={renderProps => {
                return <ViewPosts />
            }} />
            <Route exact path="/dashboard/new-post" render={renderProps => {
                return <NewPost />
            }} />
            <Route exact path="/dashboard/activity" render={renderProps => {
                return <Activity />
            }} />
        </div>
    )
}

export default DashboardNav