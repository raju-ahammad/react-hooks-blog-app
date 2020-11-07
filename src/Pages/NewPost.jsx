import axios from "axios"
import React, { useState } from 'react'

const NewPost = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")



    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description);

        axios
        .post(" http://localhost:3001/posts" , {title, description})
        .then(()=> console.log("post created"))
        .catch(()=> console.log("error"));

        setTitle("")
        setDescription("")
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
