import React from 'react';
import { Link } from 'react-router-dom';

// const SongShowItem = ({ song, removePlaylist }) => {
const SongShowItem = ({ playlistId, song, addSonglist, openModal }) => {
  return (
    <li>
      {song.title}

      <button onClick={(e) => openModal('selectPlaylist', song.id)}>AddToPlaylist</button>
      {/* <button onClick={(e) => addSonglist(2, song.id)}>AddToPlaylist</button> */}
      {/* <button onClick={(e) => addSonglist(playlistId, song.id)}>AddToPlaylist</button> */}
    </li>
  );
};

export default SongShowItem;
