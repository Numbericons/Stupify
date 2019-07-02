import { connect } from 'react-redux';
import React from 'react';
import { addSonglist } from '../../actions/songlist_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import PlaylistSelectForm from './playlist_select_form';

const mapStateToProps = (state = {}) => {
  return {
    playlists: state.entities.playlists,
    formType: 'Select Playlist',
    songId: state.ui.modal.songId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (playlist_id, song_id) => dispatch(addSonglist(playlist_id, song_id)),
    // otherForm: (
    //   <button onClick={() => dispatch(openModal('createplaylist'))}>
    //     Create Playlist
    //   </button>
    // ),
    // openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistSelectForm);