import { ListItem } from '@chakra-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Get } from '../Utils/axios'

const PostList = () => {

    
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Get(" http://localhost:3001/posts")
        .then((res) => {
            console.log(res.data);
            setPosts(res.data)
            setLoading(false)
        })
        .catch((err)=> {
            console.log(err);
            setLoading(false)
        })
    }, [])


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
