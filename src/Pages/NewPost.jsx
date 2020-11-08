import { Box } from '@chakra-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import PostManage from '../Components/PostManage'
import { Post } from '../Utils/axios'


const NewPost = () => {

    const { push } = useHistory()
    

    const onSubmitHandler = (value) => {
        const { title, description } = value

        Post(" http://localhost:3001/posts" , {title, description})
        .then(() => {
            push("/posts")
        })
        .catch((err) => {
            console.log(err);
        })

    }

    return (
        <Box maxW="35%"  boxShadow="xl" padding="3rem"  marginTop="5rem" marginX="auto">
            <PostManage onSubmit={onSubmitHandler} />
        </Box>
    )
}

export default NewPost
