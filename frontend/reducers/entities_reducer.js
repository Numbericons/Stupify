import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
// import playlistsReducer from './songs_reducer';
import songsReducer from './songs_reducer';

export default combineReducers({
  users: usersReducer,
  // playlists: playlistsReducer,
  songs: songsReducer
});
