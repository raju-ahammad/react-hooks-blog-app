import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PostManage from '../Components/PostManage';
import { Get, Put } from '../Utils/axios';

const PostDetail = () => {
    const {postId} = useParams()
    const [ postDetail, setPostDetail ] = useState("")

    const { isOpen, onOpen, onClose } =useDisclosure()

    useEffect(()=> {
        Get(`http://localhost:3001/posts/${postId}`)
        .then((res)=> {
            setPostDetail(res.data)
        })
        .catch((err)=>console.log(err))
    }, [])

    const submitHandler = (values) => {

        Put(`http://localhost:3001/posts/${postId}`, values)
        .then(() => {
            onClose()
        })
        .catch((err)=> {
            console.log(err);
        })
    }

    // console.log(postDetail.title);

    return (
        <div>
            <div>
                <Link to="/posts"> Home </Link>
            </div>
            {postDetail === "" ? <h3>Loading....</h3>: 
            <div>
                <h2>{ postDetail.title }</h2>
                <h6>postDetail.description</h6>
            </div>
            }
            <div>
                <Button onClick={onOpen}>Edit</Button>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <PostManage onSubmit={submitHandler} defaultTitle={ postDetail.title } defaultDescription={ postDetail.description } />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default PostDetail
