import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistIndexItem from './playlist_index_item';
import CreatePlaylistFormContainer from './create_playlist_form_container';
import SongShowAddItem from './song_show_add_item'
import Modal from '../modal/modal';

class PlaylistIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylists();
    this.props.fetchSongs();
  }

//   componentDidUpdate(prevProps) {
// //     if (prevProps.playlist.id != this.props.match.params.playlistId) {
//     // this.props.fetchSongs();
//       this.props.fetchPlaylist(this.props.match.params.playlistId);
// //     }
//   }


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
          <div className='sidebar-cnt'>
            <div className='logo-box-pl'>
              <img className='nav-logo-pl' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png" />
              <h2 className='nav-head-text-player'>Stupify</h2>
            </div>
            <br />
            <br />
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
            {/* <div className='pl-idx-background'></div> */}
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
    );
  }
}

export default PlaylistIndex;
