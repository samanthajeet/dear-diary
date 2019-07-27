import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Posts from './components/Posts/Posts'
// import Admin from './components/Admin/Admin'
import CreatePost from './components/CreatePost/CreatePost'
import PostManager from './components/PostManager/PostManager'

export default(
  <Switch>
    {/* <Route path='/admin' component={Admin} /> */}
    <Route path='/admin/createpost' component={CreatePost} />
    <Route path='/admin/postmanager' component={PostManager} />
    <Route path='/' exact component={Posts} />

  </Switch>
)