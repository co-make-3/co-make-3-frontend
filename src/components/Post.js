// Package Imports
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'

function Post({ post }) {

    const postID = post.id

    if (post.post_image_url === "") {
        post.post_image_url = "https://pngimage.net/wp-content/uploads/2018/05/default-png-6.png"
    }

    const [votes, setVotes] = useState(post.votes)

    function handleUpvote() {
        axiosWithAuth().post(`https://co-make-3.herokuapp.com/api/posts/${postID}/increment/votes`)
            .then(res => {
                axiosWithAuth().get(`https://co-make-3.herokuapp.com/api/posts/${postID}`)
                    .then(res => {
                        console.log('res', res)
                        setVotes(res.data.votes);
                    })
            })
    }

    return(
        <div className='card post'>
            <img className="card-img-top" src={post.post_image_url} alt={'post image'} />
            <div className="card-body">
                <div className="card-title"><strong>{post.title}</strong></div>
                <div className="card-text card-inner">
                    <p className="line-clamp">{post.description}</p>
                    <p className="read-more"><Link to={`/post/${postID}`}>Read More...</Link></p>
                    <div className="card-details">
                        <p><strong>Author: </strong>{post.authorUsername}</p>
                        <p><strong>City: </strong>{post.city}</p>
                        <p><strong>Zip Code: </strong>{post.zip_code}</p>
                        <p><strong>Votes: </strong>{votes}</p>
                    </div>
                </div>
            </div>
            <button onClick={() => handleUpvote()} className="btn btn-primary btn-upvote">Upvote</button>
        </div>
    )
}

export default Post;