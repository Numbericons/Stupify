import merge from 'lodash/merge';

import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, REMOVE_PLAYLISTS } from '../actions/playlist_actions';

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PLAYLIST:
            const newPlaylist = { [action.playlist.id]: action.playlist }
            return merge({}, state, newPlaylist);
        case RECEIVE_PLAYLISTS:
            return action.playlists;
        case REMOVE_PLAYLISTS:
            let newState = merge({}, state);
            delete newState[action.playlistId]
            return newState;
        default:
            return state;
    }
}

export default playlistsReducer;