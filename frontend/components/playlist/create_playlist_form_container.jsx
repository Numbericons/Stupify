import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaylistForm from './playlist_form';
import { addPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  const playlist = { title: '', body: '' };

  return { playlist };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPlaylist: playlist => dispatch(addPlaylist(playlist)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm);
