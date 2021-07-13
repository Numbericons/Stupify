import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import PlaylistIndexContainer from './playlist/playlist_index_container.jsx';
import PlaylistShowContainer from './playlist/playlist_show_container';
import PlayerContainer from './player/player_container';
import SidebarContainer from './sidebar/sidebar_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <ProtectedRoute path="/" component={SidebarContainer} />
      <Switch>
        <AuthRoute exact path="/" component={GreetingContainer}/>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/playlists" component={PlaylistIndexContainer} />
        <ProtectedRoute path="/playlists/:playlistId" component={PlaylistShowContainer}/>
      </Switch>
      <ProtectedRoute path="/" component={PlayerContainer} />
    </div>
  )
};

export default App;