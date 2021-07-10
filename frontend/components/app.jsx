import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import PlaylistIndexContainer from './playlist/playlist_index_container.jsx';
import PlaylistShowContainer from './playlist/playlist_show_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// const Auth = () => {
// }

const App = () => {
  debugger;
  return (
    <div>
    {/* <header>
      <div className='stupify-head'>
        <img className='logo' src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Fsimple-icons%2F512%2Fspotify-512-black.png&f=1"/>
        <h1 className='stupify-head-text'>Stupify</h1>
      </div>
    </header> */}
    <Switch>
      <AuthRoute exact path="/" component={GreetingContainer}/>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/playlists" component={PlaylistIndexContainer} />
      <ProtectedRoute path="/playlists/:playlistId" component={PlaylistShowContainer}/>
    </Switch>
    </div>
  )
};

export default App;