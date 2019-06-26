import React from 'react';

const Posts = ({ posts, loading }) => {

    if(loading){
        return <h2>Loading...</h2>
    }

    return <ul className="list-group mb-4">
        { posts.map( post => (
            <li key={post.id} className="list-group-item">
                <h3>{ post.title }</h3>
                <small className="text-muted">{ post.body }</small>
            </li>
        ))}
    </ul>;
};

export default Posts;
