// Package imports
import React, { useContext } from 'react'

// File Imports
import { PostContext } from '../contexts/PostContext';

// Component Imports
import Post from './Post';


function ViewPosts() {

    let posts = useContext(PostContext)
    
    posts = posts.sort(function (a, b) {
        return b.votes - a.votes
    })

    const postID = ""

    return (
        <div className="row">
            <div className="col-12">

                <div className="row page-title">
                    <div className="col-12 text-left">
                        <h1>View Posts</h1>   
                    </div>
                </div>

                <div className="row post-wrapper">
                    {posts.map((post, index) => <Post key={index} post={post}/>)}  
                </div>

            </div>
        </div>
    )
}

export default ViewPosts