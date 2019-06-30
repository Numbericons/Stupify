import merge from 'lodash/merge';

import { RECEIVE_SONGS } from '../actions/song_actions';
import { RECEIVE_SONG } from '../actions/song_actions';

const songsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_SONGS:
            return merge({}, action.songs)
        case RECEIVE_SONG:
            const newSong = { [action.song.id]: action.song };
            return merge({}, state, newSong);
        default:
            return state;
    }
}

export default songsReducer;