import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { fetchPlaylists, removePlaylist } from '../../actions/playlist_actions'

const mapStateToProps = state => ({
    playlists: Object.keys(state.playlists).map(id => state.playlists[id])
});

const mapDispatchToProps = dispatch => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    deletePlaylist: id => dispatch(deletePlaylist(id))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistIndex);