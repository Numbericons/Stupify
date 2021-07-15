import React from 'react';
import { Link } from 'react-router-dom';
// import PlaylistIndexItem from './playlist_index_item';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='sidebar-cnt'>
        <div className='logo-box-pl'>
          <img className='nav-logo-pl' src="https://stupify-dev.s3.us-west-1.amazonaws.com/logo.svg.png" />
          <h2 className='nav-head-text-player'>Stupify</h2>
        </div>
        <br />
        <br />
        <div className='side-icon-link-cnt'>
          <img className="pl-side-sm-icon" src={window.home} />
          <Link id='pl-side-home-link' to="/playlists">Home</Link>
        </div>
        <div className='side-icon-link-cnt'>
          <img className="pl-side-sm-icon" src={window.search} />
          <Link id='pl-side-search-link' to="#">Search</Link>
        </div>
        <div className='side-icon-link-cnt'>
          <img className="pl-side-sm-icon" src={window.library} />
          <Link id='pl-side-library-link' to="/#">Your Library</Link>
        </div>
        <div id='side-recently-played'></div>
        <div id='logout-curr-user-cont'>
          <div id='logout-text-cnt'>
            <p id='logout-text' onClick={this.props.logout}>Log Out</p>
          </div>
          <div className="or-side-cont">
            <div className="curr-side-line-extd"></div>
          </div>
          <div id='curr-user-cnt'>
            <img className="pl-side-sm-icon-user" src={window.user} />
            <p id='curr-user-text'>{this.props.currUser.toLowerCase()}</p>
            {/* <button className="logout-btn" onClick={this.props.logout}>Log Out</button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;

