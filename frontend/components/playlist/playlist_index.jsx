import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistIndexItem from './playlist_index_item';
import CreatePlaylistFormContainer from './create_playlist_form_container';
import SongShowAddItem from './song_show_add_item';
import Modal from '../modal/modal';

class PlaylistIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylists();
    this.props.fetchSongs();
    this.play = this.play.bind(this);
  }

//   componentDidUpdate(prevProps) {
// //     if (prevProps.playlist.id != this.props.match.params.playlistId) {
//     // this.props.fetchSongs();
//       this.props.fetchPlaylist(this.props.match.params.playlistId);
// //     }
//   }

  play(e) {
    let audioObj3 = new Audio("https://stupify-dev.s3.us-west-1.amazonaws.com/Songs/ModChina100.mp3");
    audioObj3.play();
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
            < SongShowAddItem song={song} key={i} addSonglist={this.props.addSonglist} openModal={this.props.openModal} />
        );
        });
    }

    return (
      <div>
        <div id='pl-show-big-cnt'>
          <Modal/>
          <div className='song-list-header'>
            <div className='pl-info-pane-cnt'>
              <h2 className='nav-head-text'>Playlists</h2>
              <br/>
              <ul>
                {playlists}
              </ul>
              <CreatePlaylistFormContainer />
            </div>
            <div className='songs-cnt'>
              <h2 className="nav-head-text">All Songs</h2>
              <br/>
              <ul>
                  {dispSongs}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistIndex;
