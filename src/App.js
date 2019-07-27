import React from 'react';
import './App.css';
import routes from './routes'
import { withRouter } from "react-router-dom";

import AdminNav from './components/AdminNav/AdminNav'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <AdminNav history={props.history} match={props.match} />
      {routes}
    </div>
  );
}

export default withRouter(App);
