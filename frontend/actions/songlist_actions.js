import * as APIUtil from '../util/songlist_api_util';
import { fetchPlaylist, receivePlaylist } from './playlist_actions';

export const addSonglist = (playlist_id, song_id) => dispatch => {
    return (
        APIUtil.addSonglist(playlist_id, song_id).then(id => {
            return (
                dispatch(fetchPlaylist(id))
            )
        })
    );
}

export const removeSonglist = (playlist_id, song_id) => dispatch => {
    return (
        APIUtil.removeSonglist(playlist_id, song_id).then(id => {
            return (
                dispatch(fetchPlaylist(id))
            )
        })
    );
}