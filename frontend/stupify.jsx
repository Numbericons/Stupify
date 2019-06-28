//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import * as ApiUtil from './util/session_api_util';
import { signup, login, logout } from './actions/session_actions';
import { fetchSong } from './util/song_api_util';
import * as PlaylistApiUtil from './util/playlist_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.fetchSong = fetchSong;
  window.fetchPlaylists = PlaylistApiUtil.fetchPlaylists;
  window.fetchPlaylist = PlaylistApiUtil.fetchPlaylist;
  window.removePlaylist = PlaylistApiUtil.removePlaylist;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
