import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">Post Lis 0</Route>
        <Route exact path="/posts">Post List 1</Route>
        <Route path="/posts/new"> New Post</Route>
        <Route path="/posts/:postId">Post Id</Route>
      </Switch>
    </div>
  );
}

export default App;
