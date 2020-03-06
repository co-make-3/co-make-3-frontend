// Package imports
import React, { useEffect, useState, useContext } from 'react'
import { Route } from 'react-router-dom'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'

// Component Imports
import DashboardProfile from './DashboardProfile'
import NewPost from './UserPost'
import ViewPosts from './ViewPosts'
import Activity from './Activities'
import PrivateRoute from '../privateRoute/PrivateRoute'
import { PostContext } from '../contexts/PostContext'
import Post from './Post'


function DashboardNav() {

    const id = localStorage.getItem('id')
    
    let posts = useContext(PostContext)
    
    posts = posts.sort(function (a, b) {
        return b.votes - a.votes
    })

    console.log(`posts: ${posts.length}`, posts)

    const [userPosts, setUserPosts] = useState([])

    useEffect(() => {
        setUserPosts(posts.filter(function (item) {
            if (item.user_id == id) {
                return item
            } 
        }))
    }, [posts])

    console.log(`userPosts: ${userPosts.length}`, userPosts)

    const [user, setUser] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: ''
    });

    useEffect(() => {
        axiosWithAuth()
            .get(`https://co-make-3.herokuapp.com/api/users/${id}`)
            .then(res => {
                setUser(res.data)
            })
            .catch(err => console.log('Axios: ', err))
    }, [])
    
    return (
        <div className="col dashboard-content">
            <Route exact path="/dashboard/:id" render={renderProps => {
                return (
                    <div className="row">
                        <div className="col-12">
            
                            <div className="row page-title">
                                <div className="col-12 text-left m-w-i">
                                    <h1>Welcome, {user.first_name} {user.last_name}</h1>     
                                </div>
                            </div>

                            <div className="row m-w-i">
                                <div className="col-12 content-wrapper">
                                    <h2>
                                    We foster communication with the government, community, and public officials to unify and address problems around the neighborhood.
                                    </h2>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <h2 className="text-center">Your Posts:</h2>
                                </div>
                            </div>

                            <div className="row post-wrapper">
                                {userPosts.map((post, index) => <Post key={index} post={post}/>)}  
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