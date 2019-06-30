import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { fetchPlaylists, removePlaylist } from '../../actions/playlist_actions'

const mapStateToProps = state => {
    return ({
        playlists: Object.keys(state.entities.playlists).map(id => state.entities.playlists[id])
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        deletePlaylist: id => dispatch(deletePlaylist(id))
    })
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistIndex);