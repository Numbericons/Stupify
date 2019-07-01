import React from 'react';
import { Link } from 'react-router-dom';


// const SongShowItem = ({ song, removePlaylist }) => {
const SongShowItem = ({ song }) => {
  return (
    <li>
      {song.title}
      {/* <button onClick={() => removeSonglist(playlist.id, song.id)}>Delete</button> */}
    </li>);
};

export default SongShowItem;
