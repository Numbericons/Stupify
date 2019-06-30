import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import CreatePlaylistFormContainer from './create_playlist_form_container';

class PlaylistIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    const playlists = this.props.playlists.map(playlist => {
      return (
        <PlaylistIndexItem
          key={playlist.id}
          playlist={playlist}
          removePlaylist={this.props.removePlaylist} />
      );
    });
    
    return (
      <div>
        <h5>Hello from Playlist index!</h5>
        <h5>put your feet up! Have a drink!</h5>
        <ul>
          {playlists}
        </ul>
        <CreatePlaylistFormContainer />
      </div>
    );
  }
}

export default PlaylistIndex;
