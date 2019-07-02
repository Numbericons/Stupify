import React from 'react';
import { Link } from 'react-router-dom';

// const SongShowItem = ({ song, removePlaylist }) => {
const SongShowItem = ({ playlistId, song, removeSonglist }) => {
  return (
    <li>
      {song.title}
      {/* <button onClick={removeSonglist(playlistId, song.id)}>Remove</button> */}
      <button onClick={(e) => removeSonglist(playlistId, song.id)}>Remove</button>
    </li>
  );
};

export default SongShowItem;
