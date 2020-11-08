import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NewPost from './Pages/NewPost';
import PostDetail from './Pages/PostDetail';
import PostList from './Pages/PostList';
import { Get } from './Utils/axios';
function App() {


  const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const getPostList = () => {
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
    }

    useEffect(() => {
      getPostList()
    }, [])


  return (
    <div className="App">
      <Switch>
        <Route exact path="/"><PostList posts={posts} loading={ loading } /></Route>
        <Route exact path="/posts"><PostList posts={posts} loading={ loading } /></Route>
        <Route exact path="/posts/new"> <NewPost /> </Route>
        <Route exact path="/posts/:postId"> <PostDetail onEditSubmit = {getPostList}/> </Route>
       
      </Switch>
    </div>
  );
}

export default App;
