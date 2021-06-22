import React from 'react';
import { Link } from 'react-router-dom';


const PlaylistIndexItem = ({ playlist, removePlaylist }) => {
  return (
    <li>
      <Link to={`/playlists/${playlist.id}`}>
        {playlist.name}
      </Link>&nbsp;
      <button className="small-btn" onClick={() => removePlaylist(playlist.id)}>Delete</button>
    </li>);
};

export default PlaylistIndexItem;
