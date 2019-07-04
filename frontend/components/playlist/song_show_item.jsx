import React from 'react';
import { Link } from 'react-router-dom';
import Clock from '../clock/clock'

const SongShowItem = ({ playlistId, song, removeSonglist }) => {
  return (
    <div id='song-row-cnt'>
        <img className="note-toggle"/>
        {/* <img className="pl-side-sm-icon" src={window.music} /> */}
      <div id='song-info'>
        <div id='song-title'>{song.title}</div>
        <div id='song-grey-font'>{song.artist_name}</div>
      </div>
      {/* <img className="pl-side-sm-icon" src={window.ellipses} onClick={(e) => removeSonglist(playlistId, song.id)}/> */}
      <div id='song-duration-cont'>
        {/* <p id='song-grey-font' className='song-duration'>{song.duration}</p> */}
        <div id='song-grey-font' className='song-duration'>
          < Clock duration={song.duration} />
        </div>
        <button id='btn-remove' onClick={(e) => removeSonglist(playlistId, song.id)}>Remove</button>
      </div>
    </div>
  );
};

export default SongShowItem;
