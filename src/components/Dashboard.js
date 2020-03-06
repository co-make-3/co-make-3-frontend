// Package imports
import React, { useEffect, useState } from 'react'
//import { Route, Redirect } from 'react-router-dom'

// Component Imports
import DashNav from './DashboardNav'
import DashContent from './DashboardContent'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'

// Context Imports
import { PostContext } from '../contexts/PostContext';


function Dashboard(props) {

    const [posts, setPosts] = useState([]);
    const [postUpvote, setPostUpvote] = useState(posts.map(post => ({postID: post.id, voted: false})));

    console.log(postUpvote);

    useEffect(() => {
        axiosWithAuth().get('http://co-make-3.herokuapp.com/api/posts')
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
    }, [])
    
    return (
        <PostContext.Provider value={posts}>
            <div className="dashboard-wrapper">
                <DashNav />
                <DashContent />
            </div>
        </PostContext.Provider>
    )
}

export default Dashboard