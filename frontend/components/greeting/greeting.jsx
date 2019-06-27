import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, location }) => {
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
        &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-cont">
      <h6 className="header-name">Hi, {currentUser.username}!</h6>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
