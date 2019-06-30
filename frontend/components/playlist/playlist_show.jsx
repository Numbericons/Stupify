import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistShow extends React.Component {
  componentDidMount() {
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
        <h3>{playlist.name}</h3>
        <Link to="/">Back to Index(Home)</Link>
      </div>
    );
  }
}

export default PlaylistShow;
