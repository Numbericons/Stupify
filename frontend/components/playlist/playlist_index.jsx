import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import CreatePlaylistFormContainer from './create_playlist_form_container';
import SongShowItem from './song_show_item'

class PlaylistIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylists();
    this.props.fetchSongs();
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
    let dispSongs = <nav>Songs would go here!</nav>;
    if (this.props.songs) {
        dispSongs = this.props.songs.map((song,i) => {
        return (
            < SongShowItem song={song} key={i} />
            // <li>
                /* {song.title} */
            // </li>
        );
        });
    }
    
    
    return (
      <div>
        <div id='pl-index-big-cnt'>
          <div className='pl-index-cnt'>
            <h2 className='nav-head-text'>Playlists</h2>
            <br/>
            <ul>
              {playlists}
            </ul>
          </div>
          <div className='songs-cnt'>
            <h2 className="h2-pl">All Songs</h2>
            <br/>
            <ul>
                {dispSongs}
            </ul>
          </div>
        </div>
        <div id='create-pl-cnt'>
          <CreatePlaylistFormContainer />
        </div>
      </div>
    );
  }
}

export default PlaylistIndex;
