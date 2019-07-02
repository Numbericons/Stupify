import React from 'react';
import { Link } from 'react-router-dom';

// const SongShowItem = ({ song, removePlaylist }) => {
const SongShowItem = ({ playlistId, song, addSonglist }) => {
  return (
    <li>
      {song.title}
      <button onClick={(e) => addSonglist(2, song.id)}>AddToPlaylist</button>
      {/* <button onClick={(e) => addSonglist(playlistId, song.id)}>AddToPlaylist</button> */}
    </li>
  );
};

export default SongShowItem;
