import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistShow extends React.Component {
  componentDidMount() {
      debugger
    this.props.fetchPlaylist(this.props.match.params.playlistId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.playlist.id != this.props.match.params.playlistId) {
      this.props.fetchPlaylist(this.props.match.params.playlistId);
    }
  }

  render() {
    const { playlist } = this.props;
    if (!playlist) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h5>Playlist Show!</h5>
        <h3>{playlist.name}</h3>
        <Link to="/playlists">Back to all my Playlists!</Link>
      </div>
    );
  }
}

export default PlaylistShow;
