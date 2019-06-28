import * as APIUtil from '../util/song_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const fetchSong = id => dispatch => (
    APIUtil.fetchSong(id).then(song => (
        dispatch(receiveSong(song))
    ))
);