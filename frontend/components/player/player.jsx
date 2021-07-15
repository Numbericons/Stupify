import React from 'react';
import { Link } from 'react-router-dom';
// import PlaylistIndexItem from './playlist_index_item';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }

  play(e) {
    let audioObj3 = new Audio("https://stupify-dev.s3.us-west-1.amazonaws.com/Songs/ModChina100.mp3");
    audioObj3.play();
  }

  render() {
    return (
      <div id='player-cnt'>
        <div id='player-song-info'>
          <img id="player-heart-no" src={window.heartno} />
        </div>
        <div id='player-control-ctn'>
          <img id="player-random" src={window.random} />
          <img id="player-back" src={window.back} />
          <img id="player-play" src={window.playbtn} onClick={this.play}/>
          <img id="player-forward" src={window.forward} />
          <img id="player-repeat" src={window.repeat} />
          {/* <div id='song-progress-cnt'> */}
          <div className="song-progress-cont">
            {/* <div>00:00</div> */}
            <div className="song-progress"></div>
            {/* <div>03:16</div> */}
          </div>
        </div>
        <div id='player-volume-ctn'>
          <img id="player-volume-up" src={window.volumeup} />
          <div className="or-volume-cont">
            <div className="or-side-line-extd"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
