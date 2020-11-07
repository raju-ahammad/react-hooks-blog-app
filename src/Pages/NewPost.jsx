import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Post } from '../Utils/axios'

const NewPost = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const { push } = useHistory()


    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description);

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

    return (
        <div>
            <form onSubmit={HandleSubmit} >
                <div>
                    <label >Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}  />
                </div>
                <div>
                    <label >Description</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default NewPost
