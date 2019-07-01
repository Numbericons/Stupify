import merge from 'lodash/merge';

import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, REMOVE_PLAYLIST } from '../actions/playlist_actions';

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PLAYLIST:
            // const newPlaylist = { [action.playlist.id]: action.playlist }
            const pl = Object.values(action.playlist)[0]
            const newPlaylist = { [pl.id]: pl }
            // const newPlaylist = { [Object.values(action.playlist)[0]]: Object.values(action.playlist) }
            return merge({}, state, newPlaylist);
        case RECEIVE_PLAYLISTS:
            return action.playlists;
        case REMOVE_PLAYLIST:
            let newState = merge({}, state);
            delete newState[action.playlistId]
            return newState;
        default:
            return state;
    }
}

export default playlistsReducer;