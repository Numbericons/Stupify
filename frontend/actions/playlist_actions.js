import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const REMOVE_PLAYLISTS = 'REMOVE_PLAYLISTS';


export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const deletePlaylist = playlist => ({
  type: REMOVE_PLAYLIST,
  playlistId: paylist.id
});

export const fetchPlaylists = () => dispatch => (
    APIUtil.fetchPlaylists().then(playlists => (
        dispatch(receivePlaylists(playlists))
    ))
);

export const fetchPlaylist = id => dispatch => (
    APIUtil.fetchPlaylist(id).then(playlist => (
        dispatch(receivePlaylist(playlist))
    ))
);

export const removePlaylist = id => dispatch => (
    APIUtil.removePlaylist(id).then(playlist => (
        dispatch(deletePlaylist(playlist))
    ))
);