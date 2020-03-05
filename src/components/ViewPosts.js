// Package imports
import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'
import { Route } from 'react-router-dom'

import Post from './Post';

function ViewPosts() {

    const [posts, setPosts] = useState([]);
    const postID = ""

    useEffect(() => {
        axiosWithAuth().get('http://co-make-3.herokuapp.com/api/posts')
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
    }, [])

    return (
        <div className="row">
            <Route exact path={`/post/${postID}`}></Route>
            <div className="col-12">

                <div className="row page-title">
                    <div className="col-12 text-left">
                        <h1>View Posts</h1>   
                    </div>
                </div>

                <div className="row post-wrapper">
                    {posts.map(post => <Post post={post}/>)}  
                </div>

            </div>
        </div>
    )
}

export default ViewPosts