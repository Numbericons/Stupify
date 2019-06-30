import React from 'react';
import { Link } from 'react-router-dom';


const PlaylistIndexItem = ({ Playlist, deletePlaylist }) => {
  return (
    <li>
      <Link to={`/playlists/${Playlist.id}`}>
        {Playlist.name}
      </Link>&nbsp;
      <button onClick={() => deletePlaylist(Playlist.id)}>Delete</button>
    </li>);
};

export default PlaylistIndexItem;
