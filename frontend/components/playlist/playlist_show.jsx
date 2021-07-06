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
        );
        });
    }
    if (!playlist.album_art) {
      playlist.album_art = window.albummissing;
    }
    return (
      <div>
        <div id='pl-show-big-cnt'>
          <div className='sidebar-cnt'>
            <div className='logo-box-pl'>
              <img className='nav-logo-pl' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png"/>
              <h2 className='nav-head-text-player'>Stupify</h2>
            </div>
              <br/>
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
                <div id='side-recently-played'></div>
                <div id='logout-curr-user-cont'>
                  <div id='logout-text-cnt'>
                    <p id='logout-text' onClick={this.props.logout}>Log Out</p>
                  </div>
                  <div className="or-side-cont">
                    <div className="curr-side-line-extd"></div>
                  </div>
                  <div id='curr-user-cnt'>
                    <img className="pl-side-sm-icon-user" src={window.user} />
                    <p id='curr-user-text'>{this.props.currUser.toLowerCase()}</p>
                    {/* <button className="logout-btn" onClick={this.props.logout}>Log Out</button> */}
                  </div>
                </div>
          </div>
          {/* <div className='pl-album-cnt'></div> */}
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
              {/* <div id='song-progress-cnt'> */}
                <div className="song-progress-cont">
                    {/* <div>00:00</div> */}
                    <div className="song-progress"></div>
                    {/* <div>03:16</div> */}
                </div>
            </div>
            <div id='player-volume-ctn'>
              <img id="player-volume-up" src={window.volumeup} />
              <div className="or-volume-cont">
                  <div className="or-side-line-extd"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistShow;
