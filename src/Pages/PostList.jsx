import { ListItem } from '@chakra-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, loading }) => {
    
    return (
        <div>

            

            {
                loading ? " Loading...":
                posts.map((post) => {
                return <ListItem key={post.id}>
                    <Link to={`posts/${post.id}`} >{ post.title }</Link>
                </ListItem>
                })
            }
        </div>
    )
}

export default PostList
