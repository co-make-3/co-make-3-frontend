// Package imports
import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'

import Post from './Post';

function ViewPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('http://co-make-3.herokuapp.com/api/posts')
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
    }, [])

    return (
        <div className="row">
            <div className="col-12">

                <div className="row page-title">
                    <div className="col-12 text-left">
                        <h1>View Posts</h1>
                        {posts.map(post => <Post post={post}/>)}     
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewPosts