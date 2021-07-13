import React from 'react';
import { Link } from 'react-router-dom';
import SongShowItem from './song_show_item';

class PlaylistShow extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistId);
  }

//   componentDidUpdate(prevProps) {
//     if (prevProps.playlist.id != this.props.match.params.playlistId) {
//       this.props.fetchPlaylist(this.props.match.params.playlistId);
//     }
//   }

  render() {
    const { playlist } = this.props;
    if (!playlist) {
      return <div>Loading...</div>;
    }
    let dispSongs = <nav>Songs would go here!</nav>;
    if (this.props.songs) {
        dispSongs = this.props.songs.map((song,i) => {
        return (
            < SongShowItem playlistId={this.props.playlist.id} song={song} key={i} removeSonglist={this.props.removeSonglist} />
        );
        });
    }
    if (!playlist.album_art) {
      playlist.album_art = window.albummissing;
    }
    return (
      <div>
        <div id='pl-show-big-cnt'>
          <div className='song-list-header'>
            <div className='pl-info-pane-cnt'>
              <div id='pl-info-cnt'>
                <img id='pl-show-art' src={playlist.album_art} />
                <div id='pl-title-cnt'>
                  <h2 id='pl-title'>{playlist.name}</h2>
                </div>
                <button className='play-btn'>PLAY</button>
                <br/>
                <div id='song-grey-font'>
                  {this.props.songs.length} SONGS
                </div>
              </div>
            </div>
            <div className='playlist-cnt'>
              <div className='songs-cnt'>
                  <ul>
                      {dispSongs}
                  </ul>
              </div>
            </div>
          </div>
          {/* <Player/> */}
        </div>
      </div>
    );
  }
}

export default PlaylistShow;
