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

                <div className="row content-wrapper">
                    <div className="col-12">
                        <table class="table table-striped table-dark">
                            <thead>
                                <tr>
                                    <th className="table-h-c-1" scope="col">ID#</th>
                                    <th className="table-h-c-2" scope="col">Description</th>
                                    <th className="table-h-c-3" scope="col">Up Votes</th>
                                    <th className="table-h-c-4" scope="col">Down Votes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>,jhcvnhvhmnjv,hmvb....</td>
                                    <td>4857</td>
                                    <td>24</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>,mjb;.,mjb.,jb.,mj....</td>
                                    <td>1540</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>j,hvgljhvgbljhb....</td>
                                    <td>754</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewPosts