import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaylistForm from './playlist_form';
import { createPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  const Playlist = { title: '', body: '' };
  const formType = 'Create Playlist';

  return { Playlist, formType };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: Playlist => dispatch(createPlaylist(Playlist)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm);
