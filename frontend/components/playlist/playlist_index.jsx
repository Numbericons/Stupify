import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import CreatePlaylistFormContainer from './create_playlist_form_container';

class PlaylistIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    const Playlists = this.props.Playlists.map(Playlist => {
      return (
        <PlaylistIndexItem
          key={Playlist.id}
          Playlist={Playlist}
          deletePlaylist={this.props.deletePlaylist} />
      );
    });
    
    return (
      <div>
        <ul>
          {Playlists}
        </ul>
        <CreatePlaylistFormContainer />
      </div>
    );
  }
}

export default PlaylistIndex;
