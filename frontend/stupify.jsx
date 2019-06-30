//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import { fetchSong } from './actions/song_actions';
import { addPlaylist, fetchPlaylists, fetchPlaylist, removePlaylist } from './actions/playlist_actions';
import { addSonglist, removeSonglist } from './actions/songlist_actions';
// import { fetchSong } from './util/song_api_util';
import * as PlaylistApiUtil from './util/playlist_api_util';
// import * as SonglistApiUtil from './util/songlist_api_util';

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

  window.addSonglist = addSonglist;
  window.removeSonglist = removeSonglist;

  window.fetchSong = fetchSong;


  window.addPlaylist = addPlaylist;
  window.fetchPlaylist = fetchPlaylist;
  window.fetchPlaylists = fetchPlaylists;
  window.removePlaylist = removePlaylist;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
