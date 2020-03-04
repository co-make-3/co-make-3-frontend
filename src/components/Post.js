import React from 'react';

function Post({post}) {
    return(
        <div className='post'>
            <img src={post.post_image_url} alt={'post image'} />
            <h3>{post.authorUsername}</h3>
            <p>{post.description}</p>
            <p>City: {post.city}</p>
            <p>Zip Code: {post.zip_code}</p>
            <p>Votes: {post.votes}</p>
            <button>Upvote</button>
        </div>
    )
}

export default Post;