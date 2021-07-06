import React from 'react';
import { Link } from 'react-router-dom';

const SongShowItem = ({ playlistId, song, addSonglist, openModal }) => {
  return (
    <li className="show-song">
      {song.title}

      <button className="small-btn-long" onClick={(e) => openModal('selectPlaylist', song.id)}>Add To Playlist</button>
      {/* <button onClick={(e) => addSonglist(2, song.id)}>AddToPlaylist</button> */}
      {/* <button onClick={(e) => addSonglist(playlistId, song.id)}>AddToPlaylist</button> */}
    </li>
  );
};

export default SongShowItem;
