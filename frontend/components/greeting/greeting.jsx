import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, location }) => {
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  const sessionLinks = () => (
    <div>
      <div className='splash-back'>
        <div className='nav-bar-auth'>
          <div className='logo-box'>
            <img className='nav-logo-greet' src="https://stupify-dev.s3.us-west-1.amazonaws.com/logo.svg.png"/>
            <h2 className='nav-head-text'>Stupify</h2>
          </div>
          <nav className="login-signup">
            <Link className='link-auth' to="/login">Login</Link>
            <Link className='link-auth' to="/signup">Sign up</Link>
          </nav>
        </div>
      </div>
    </div>
  );
  const personalGreeting = () => (
    <div className='splash-back'>
      <div className='nav-bar-curr-user'>
        <div className='div-flex'>
          <hgroup className="header-cont">
            <h4 className="header-name">Hi, {currentUser.username}!</h4>
            <button className="logout-btn" onClick={logout}>Log Out</button>
          </hgroup>
        </div>
      </div>
      <div className="index-link-cont">
        <Link className="index-link" to="/playlists">Playlist Index</Link>
      </div>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
