import { Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from '@chakra-ui/core'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'




const PostManage = ({onSubmit, defaultTitle=" ", defaultDescription=" "}) => {

    const { control, handleSubmit, errors} = useForm()

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
                <FormControl isInvalid={errors.title}>
                    <FormLabel  htmlFor="title">Title</FormLabel>
                    <Controller 
                    defaultValue={defaultTitle }
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
                            value: 30,
                            message: "max len is 10 please enter less than 100"
                        }
                    }}  
                    />
                    <FormErrorMessage>{ errors.title && errors.title.message }</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.description}>
                    <FormLabel htmlFor="description">Description</FormLabel>
                    <Controller 
                    defaultValue={defaultDescription}
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
                            value: 200,
                            message: "max len is 100 please enter less than 100"
                        }
                    }}  
                    />
                    <FormErrorMessage>{ errors.description && errors.description.message }</FormErrorMessage>
                </FormControl>
                <Button type="submit" marginTop="2rem" variantColor="green" borderColor="green.500" border="1px" size="md" height="48px"
  width="200px">Submit</Button>
            </form>
    )
}

export default PostManage
