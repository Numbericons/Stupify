import React from 'react';
import { Link } from 'react-router-dom';


const PlaylistIndexItem = ({ playlist, removePlaylist }) => {
  return (
    <ul className="playlist-index">
      <Link to={`/playlists/${playlist.id}`}>
        <li className="playlist-show-item">{playlist.name}</li>
      </Link>&nbsp;
      <button className="small-btn" onClick={() => removePlaylist(playlist.id)}>Delete</button>
    </ul>);
};

export default PlaylistIndexItem;
