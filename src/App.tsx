import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Counter from './examples/counter/Counter';
import { PostsList, } from './examples/posts/postsList';
import { AddPostForm, } from './examples/posts/addPostForm';
const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? '/react' : '';

function App() {
  return (
    <Router basename={BASE_NAME}>
      <Switch>
        <Route
          path="/counter"
        >
          <Counter />
        </Route>
        <Route
          path="/posts"
        >
          <React.Fragment>
            <AddPostForm />
            <PostsList />
          </React.Fragment>
        </Route>
        <Redirect to="/posts" />
      </Switch>
    </Router>
  );
}

export default App;
