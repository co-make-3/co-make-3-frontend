import React from 'react';

function Post({post}) {
    return(
        <div className='card post'>
            <img className="card-img-top" src={post.post_image_url} alt={'post image'} />
            <div className="card-body">
                <div className="card-title">{post.authorUsername}</div>

            </div>
            <p className="card-text card-inner">
                {post.description}
                <p>City: {post.city}</p>
                <p>Zip Code: {post.zip_code}</p>
                <p>Votes: {post.votes}</p>
            </p>
            <a href="#" class="btn btn-primary">Upvote</a>
        </div>
    )
}

export default Post;