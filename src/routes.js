import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Posts from './components/Posts/Posts'
// import Admin from './components/Admin/Admin'
import CreatePost from './components/CreatePost/CreatePost'
import PostManager from './components/PostManager/PostManager'
import Login from './components/LoginRegister/Login'

export default(
  <Switch>
    {/* <Route path='/admin' component={Admin} /> */}
    <Route path='/admin/createpost' component={CreatePost} />
    <Route path='/admin/postmanager' component={PostManager} />
    <Route path='/login' component={Login} />

    <Route path='/' exact component={Posts} />

  </Switch>
)