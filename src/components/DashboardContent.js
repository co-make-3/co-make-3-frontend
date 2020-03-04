// Package imports
import React from 'react'
import { Route } from 'react-router-dom'

// Component Imports
import DashboardProfile from './DashboardProfile'
import NewPost from './UserPost'
import ViewPosts from './ViewPosts'
import Activity from './Activities'
import PrivateRoute from '../privateRoute/PrivateRoute'


function DashboardNav() {

    const id = localStorage.getItem('id')
    
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
            <PrivateRoute exact path={`/dashboard/${id}/profile`} component={DashboardProfile} />
            <PrivateRoute exact path={`/dashboard/${id}/view-posts`} component={ViewPosts} />
            <PrivateRoute exact path={`/dashboard/${id}/new-post`} component={NewPost} />
            <PrivateRoute exact path={`/dashboard/${id}/activity`} component={Activity} />
        </div>
    )
}

export default DashboardNav