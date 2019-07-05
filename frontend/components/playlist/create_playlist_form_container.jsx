import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaylistForm from './playlist_form';
import { addPlaylist } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => {
  const playlist = { name: '' };

  return { playlist };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPlaylist: playlist => dispatch(addPlaylist(playlist)),
    fetchSongs: () => dispatch(fetchSongs())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm);
