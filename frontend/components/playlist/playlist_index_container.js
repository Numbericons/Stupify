import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { fetchPlaylists, removePlaylist } from '../../actions/playlist_actions'
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = state => {
    return ({
        playlists: Object.keys(state.entities.playlists).map(id => state.entities.playlists[id]),
        songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id])
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        removePlaylist: id => dispatch(removePlaylist(id)),
        fetchSongs: () => dispatch(fetchSongs())
    })
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistIndex);