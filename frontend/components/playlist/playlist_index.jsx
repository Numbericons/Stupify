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
        <div id='pl-index-cnt'>
          <h2 className='nav-head-text'>Playlists</h2>
          <br/>
          <ul>
            {playlists}
          </ul>
        </div>
        <div id='create-pl-cnt'>
          <CreatePlaylistFormContainer />
        </div>
      </div>
    );
  }
}

export default PlaylistIndex;
