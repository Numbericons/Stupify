import React from 'react';
import { Link } from 'react-router-dom';
import SongShowItem from './song_show_item'

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
            // <li>
              // {song.title}
            // </li>
        );
        });
    }
    return (
      <div>
        <div id='pl-show-big-cnt'>
          <div className='sidebar-cnt'>
            <div className='logo-box-pl'>
              <img className='nav-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png"/>
              <h2 className='nav-head-text-player'>Stupify</h2>
            </div>
              <br/>
                <h2 id='pl-title'>Playlist: {playlist.name}</h2>
                <br/>
                <div className='side-icon-link-cnt'>
                  <img className="pl-side-sm-icon" src={window.home} />
                  <Link id='pl-side-home-link' to="/playlists">Home</Link>
                </div>
                <div className='side-icon-link-cnt'>
                  <img className="pl-side-sm-icon" src={window.search} />
                  <Link id='pl-side-search-link' to="#">Search</Link>
                </div>
                <div className='side-icon-link-cnt'>
                  <img className="pl-side-sm-icon" src={window.library} />
                  <Link id='pl-side-library-link' to="/#">Your Library</Link>
                </div>
          </div>
          {/* <div className='pl-album-cnt'></div> */}
          <div className='pl-show-cnt'>
            <div className='pl-show-title-cnt'>
                {/* <div className='pl-title-cont'> */}
            </div>
            <div className='playlist-cnt'>
              <div className='songs-cnt'>
                  <h2>Playlist Songs:</h2>
                  <ul>
                      {dispSongs}
                  </ul>
              </div>
            </div>
           {/* </div> */}
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
      </div>
    );
  }
}

export default PlaylistShow;
