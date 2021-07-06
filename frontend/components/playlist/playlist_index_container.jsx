import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { fetchPlaylists, removePlaylist } from '../../actions/playlist_actions'
import { fetchSongs } from '../../actions/song_actions';
import { addSonglist } from '../../actions/songlist_actions';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
    return ({
        playlists: Object.keys(state.entities.playlists).map(id => state.entities.playlists[id]),
        songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id]),
        currUser: Object.values(state.entities.users)[0].username
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        removePlaylist: id => dispatch(removePlaylist(id)),
        fetchSongs: () => dispatch(fetchSongs()),
        addSonglist: (playlistId, songId) => dispatch(addSonglist(playlistId, songId)),
        openModal: (modal, songId) => dispatch(openModal(modal, songId)),
        logout: () => dispatch(logout())
    })
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistIndex);