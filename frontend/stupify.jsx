//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import { fetchSong } from './actions/song_actions';
import { fetchPlaylists, fetchPlaylist, deletePlaylist } from './actions/playlist_actions';
// import { fetchSong } from './util/song_api_util';
import * as PlaylistApiUtil from './util/playlist_api_util';
import * as SonglistApiUtil from './util/songlist_api_util';

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

  window.addSonglist = SonglistApiUtil.addSonglist;
  window.removeSonglist = SonglistApiUtil.removeSonglist;

  window.fetchSong = fetchSong;
  
  window.fetchPlaylist = fetchPlaylist;
  window.fetchPlaylists = fetchPlaylists;
  window.deletePlaylist = deletePlaylist;

  // window.fetchPlaylists = PlaylistApiUtil.fetchPlaylists;
  // window.addPlaylist = PlaylistApiUtil.addPlaylist;
  // window.fetchPlaylist = PlaylistApiUtil.fetchPlaylist;
  // window.removePlaylist = PlaylistApiUtil.removePlaylist;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
