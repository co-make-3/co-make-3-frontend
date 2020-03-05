// Package imports
import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'
import { Route } from 'react-router-dom'

import Post from './Post';

function ViewPosts() {

    const [posts, setPosts] = useState([]);

    let sortedPosts = {}

    useEffect(() => {
        axiosWithAuth().get('http://co-make-3.herokuapp.com/api/posts')
            .then(res => {
                console.log(res.data)
                
                sortedPosts = res.data.sort(function (a, b) {
                    return b.votes - a.votes
                });
                setPosts(sortedPosts)
            })
    }, [])

    return (
        <div className="row">
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