import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
<<<<<<< HEAD
=======
  Link
>>>>>>> origin/master
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
<<<<<<< HEAD
import Auth from './hoc/auth';
=======
>>>>>>> origin/master

function App() {
  return (
    <Router>
      <div>
        
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
<<<<<<< HEAD
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
=======
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
>>>>>>> origin/master
        </Switch>
      </div>
    </Router>
  );
}


export default App;
