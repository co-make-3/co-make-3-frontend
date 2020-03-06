// Package Imports
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'

function Post({ post }) {

    const id = post.id;

    function handleUpvote() {
        axiosWithAuth().put(`http://co-make-3.herokuapp.com/api/posts/${id}/increment/votes	`)
            .then(res => console.log(res));
    }

    function handleDownvote() {
        axiosWithAuth().put(`http://co-make-3.herokuapp.com/api/posts/${id}/decrement/votes	`)
            .then(res => console.log(res));
    }

    if (post.post_image_url === "") {
        post.post_image_url = "https://pngimage.net/wp-content/uploads/2018/05/default-png-6.png"
    }
    
    return(
        <div className='card post'>
            <img className="card-img-top" src={post.post_image_url} alt={'post image'} />
            <div className="card-body">
                <div className="card-title">Posted by: {post.authorUsername}</div>
                <div className="card-text card-inner">
                    <p className="line-clamp">{post.description}</p>
                    <p className="read-more"><Link>Read More...</Link></p>
                    <div className="card-details">
                        <p><strong>City: </strong>{post.city}</p>
                        <p><strong>Zip Code: </strong>{post.zip_code}</p>
                        <p><strong>Votes: </strong>{post.votes}</p>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary btn-upvote">Upvote</button>
        </div>
    )
}

export default Post;