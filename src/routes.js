import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Posts from './components/Posts/Posts'
import Admin from './components/Admin/Admin'

export default(
  <Switch>
    <Route path='/' exact component={Posts} />
    <Route path='/admin' component={Admin} />
  </Switch>
)