import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';
import { removeSonglist } from '../../actions/songlist_actions.js';



const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
    playlist: state.entities.playlists[ownProps.match.params.playlistId],
    songs: Object.values(state.entities.songs),
    currUser: Object.values(state.entities.users)[0].username
  })
}

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  removeSonglist: (playlistId, songId) => dispatch(removeSonglist(playlistId, songId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow);
