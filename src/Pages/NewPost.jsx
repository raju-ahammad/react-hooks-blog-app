import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from '@chakra-ui/core'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { Post } from '../Utils/axios'

const NewPost = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const { push } = useHistory()

    const { control, handleSubmit, errors} = useForm()


    const onSubmitHandler = (value) => {
        // e.preventDefault();

        const { title, description } = value

        Post(" http://localhost:3001/posts" , {title, description})
        .then(() => {
            setTitle("")
            setDescription("")
            push("/posts")
        })
        .catch((err) => {
            console.log(err);
        })

    }
    console.log(errors);

    return (
        <Box maxW="35%"  boxShadow="6xl" padding="3rem"  marginTop="5rem" marginX="auto">
            <form onSubmit={handleSubmit(onSubmitHandler)} >
                <FormControl isInvalid={errors.title}>
                    <FormLabel  htmlFor="title">Title</FormLabel>
                    <Controller 
                    defaultValue="" 
                    control={control} 
                    name="title" 
                    as={Input}
                    rules ={{
                        required: {
                            value: true,
                            message:"this value is requered"
                        },
                        minLength: {
                            value: 3,
                            message: "min len is 3 please enter more than 3"
                        },
                        maxLength: {
                            value: 10,
                            message: "max len is 10 please enter less than 100"
                        }
                    }}  
                    />
                    <FormErrorMessage>{ errors.title && errors.title.message }</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.description}>
                    <FormLabel htmlFor="description">Description</FormLabel>
                    <Controller 
                    defaultValue="" 
                    control={control} 
                    name="description" 
                    as={Textarea}
                    rules ={{
                        required: {
                            value: true,
                            message:"this value is requered"
                        },
                        minLength: {
                            value: 3,
                            message: "min len is 3 please enter more than 3"
                        },
                        maxLength: {
                            value: 100,
                            message: "max len is 100 please enter less than 100"
                        }
                    }}  
                    />
                    <FormErrorMessage>{ errors.description && errors.description.message }</FormErrorMessage>
                </FormControl>
                <Button type="submit" marginTop="2rem" variantColor="green" borderColor="green.500" border="1px" size="md" height="48px"
  width="200px">Submit</Button>
            </form>
        </Box>
    )
}

export default NewPost
