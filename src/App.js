import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NewPost from './Pages/NewPost';
import PostDetail from './Pages/PostDetail';
import PostList from './Pages/PostList';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"><PostList/></Route>
        <Route exact path="/posts"><PostList/></Route>
        <Route exact path="/posts/new"> <NewPost /> </Route>
        <Route exact path="/posts/:postId"> <PostDetail/> </Route>
       
      </Switch>
    </div>
  );
}

export default App;
