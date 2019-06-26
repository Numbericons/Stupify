import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  // <div>
  //   <h1>Stupify (from app.jsx)</h1>
  // </div>
  <div>
    <header>
      <div className='stupify-head'>
        {/* <img className='logo' src='http://hatw.co.uk/wp-content/uploads/2015/10/spotify.png'/> */}
        <h1 className='stupify-head-text'>Stupify®</h1>
        {/* <h6 className="restricted">®</h6> */}
      </div>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={LogInFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;