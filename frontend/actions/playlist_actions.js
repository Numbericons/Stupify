import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';


export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const receivePlaylist = payload => ({
  type: RECEIVE_PLAYLIST,
  playlist: payload.playlist,
  songs: payload.songs
});
// export const receivePlaylist = playlist => ({
//   type: RECEIVE_PLAYLIST,
//   playlist
// });

export const deletePlaylist = id => ({
  type: REMOVE_PLAYLIST,
  playlistId: id
});

export const addPlaylist = playlist => dispatch => (
  APIUtil.addPlaylist(playlist).then(playlist => {
    return (
      dispatch(receivePlaylist(playlist))
    )
  })
);

export const fetchPlaylists = () => dispatch => (
  APIUtil.fetchPlaylists().then(playlists => {
    return (
      dispatch(receivePlaylists(playlists))
    )
  })
);

export const fetchPlaylist = id => dispatch => (
    APIUtil.fetchPlaylist(id).then(payload => {
        return (
          dispatch(receivePlaylist(payload))
        )
    })
);

// export const fetchPlaylist = id => dispatch => (
//     APIUtil.fetchPlaylist(id).then(playlist => (
//         dispatch(receivePlaylist(playlist))
//     ))
// );

export const removePlaylist = id => dispatch => {
    return (
      APIUtil.removePlaylist(id).then(playlists => {
          return ( 
            dispatch(deletePlaylist(id))
          )
      })
    );
};