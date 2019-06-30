import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaylistForm from './playlist_form';
import { addPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  const playlist = { title: '', body: '' };
  const formType = 'Add Playlist';

  return { playlist, formType };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: playlist => dispatch(addPlaylist(playlist)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm);
