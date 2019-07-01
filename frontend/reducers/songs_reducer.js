import merge from 'lodash/merge';

import { RECEIVE_SONGS } from '../actions/song_actions';
import { RECEIVE_SONG } from '../actions/song_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';

const songsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_SONGS:
            return merge({}, action.songs)
        case RECEIVE_SONG:
            const newSong = { [action.song.id]: action.song };
            return merge({}, state, newSong);
        case RECEIVE_PLAYLIST:
            return merge({}, state, action.songs)
        default:
            return state;
    }
}

export default songsReducer;