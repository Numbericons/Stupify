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
          <div className='div-flex'>
          
            {/* <img className='nav-logo' src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-spotify-social-media-icon-design-template-vector-png-image_3654774.jpg"/> */}
            <img className='nav-logo' src="https://i.ya-webdesign.com/images/spotify-logo-black-png-6.png"/>
            {/* <img className='nav-logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkTSOGtXE8Co1jnD5Y7bFMWw26LH_wY1rPztQFE0mje6M9Nwz"/> */}
            {/* <img className='nav-logo' src="https://image.flaticon.com/icons/png/512/121/121148.png"/> */}
            <h1 className='nav-head-text'>Stupify</h1>
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
            <h6 className="header-name">Hi, {currentUser.username}!</h6>
            <button className="logout-btn" onClick={logout}>Log Out</button>
          </hgroup>
        </div>
      </div>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
