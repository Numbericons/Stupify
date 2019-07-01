import React from 'react';
import { Link } from 'react-router-dom';

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
        dispSongs = this.props.songs.map(song => {
        return (
            song.title
        );
        });
    }
    
    return (
      <div>
        <div className='pl-title-cont'>
            <h3>Playlist: {playlist.name}</h3>
        </div>
        <Link to="/playlists">Back to all my Playlists!</Link>
        <div className='div-pl-show-cont'>
            <div className='playlist-cont'>
                <h2>Playlist Songs:</h2>
            </div>
            <div className='songs-cont'>
                <ul>
                    <h2>All Songs:</h2>
                    {dispSongs}
                </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default PlaylistShow;
