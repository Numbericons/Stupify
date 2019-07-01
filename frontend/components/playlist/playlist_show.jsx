import React from 'react';
import { Link } from 'react-router-dom';
import SongShowItem from './song_show_item'

class PlaylistShow extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistId);
    this.props.fetchSongs();
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
            < SongShowItem song={song} key={i} />
            // <li>
                /* {song.title} */
            // </li>
        );
        });
    }
    
    return (
      <div>
        <div className='pl-shw-cnt'>
             <div className='pl-title-cont'>
            <h3>Playlist: {playlist.name}</h3>
        </div>
            <Link to="/playlists">Back to all my Playlists!</Link>
            <div className='div-pl-show-cont'>
                <div className='playlist-cont'>
                    <h2 className="h2-pl">Playlist Songs:</h2>
                </div>
                <div className='songs-cnt'>
                    <h2 className="h2-pl">All Songs</h2>
                    <br/>
                    <ul>
                        {dispSongs}
                    </ul>
                </div>
            </div>
        </div>
        <div id='player-cnt'>
          <div id='player-song-info'>
            <img id="player-heart-no" src={window.heartno} />
            {/* <img id="player-heart-yes" src={window.heartyes} /> */}
          </div>
          <div id='player-control-ctn'>
            <img id="player-random" src={window.random} />
            <img id="player-back" src={window.back} />
            <img id="player-play" src={window.playbtn} />
            <img id="player-forward" src={window.forward} />
            <img id="player-repeat" src={window.repeat} />
          </div>
          <div id='player-volume-cnt'>
            <img id="player-volume-up" src={window.volumeup} />
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistShow;
