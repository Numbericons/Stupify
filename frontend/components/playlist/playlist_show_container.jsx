import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';
import { removeSonglist } from '../../actions/songlist_actions.js';
import { logout } from '../../actions/session_actions';



const mapStateToProps = (state, ownProps) => {
  return ({
    playlist: state.entities.playlists[ownProps.match.params.playlistId],
    songs: Object.values(state.entities.songs),
    currUser: Object.values(state.entities.users)[0].username
  })
}

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  removeSonglist: (playlistId, songId) => dispatch(removeSonglist(playlistId, songId)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow);
