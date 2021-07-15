import { connect } from 'react-redux';
import Player from './player';
import { fetchPlaylists, removePlaylist } from '../../actions/playlist_actions'

const mapStateToProps = state => {
    return ({
        playlists: Object.keys(state.entities.playlists).map(id => state.entities.playlists[id]),
        songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id])
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        removePlaylist: id => dispatch(removePlaylist(id))
    })
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);