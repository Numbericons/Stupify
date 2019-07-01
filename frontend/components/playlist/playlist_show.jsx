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
            <i className="fas fa-play-circle">i tag</i>
            </div>
        </div>
        <div id='player-cnt'>
        </div>
      </div>
    );
  }
}

export default PlaylistShow;
