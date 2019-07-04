import React from 'react';
import { withRouter } from 'react-router-dom';

class PlaylistSelectForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e, playlistId) {
    e.preventDefault();
    let songId = this.props.songId;
    this.props.processForm(playlistId, songId).then(this.props.closeModal);
  }

  render() {
    const playlists = Object.values(this.props.playlists).map((playlist, i) => {
    return (
        <div onClick={(e) => this.handleSubmit(e, playlist.id)} key={i}>
            <div id='pl-select-show-cnt'>
              {playlist.name}
            </div>
            {/* <img src=""/>  cover album */}
        </div>
        // <input type="checkbox" name={playlist.name} value={playlist.name}/>
      );
    });
    return (
      <div className="pl-select-cnt">
        <form onSubmit={this.handleSubmit} className="pl-select-form-box">
          <div id='close-x-cnt'>
            {/* <div onClick={this.props.closeModal} className="close-x" id='pl-add'>X</div> */}
            <div onClick={this.props.closeModal} className="close-x" id='pl-add'>
              <img className="pl-select-close" src={window.circlesolid}/>
              {/* <img className="pl-side-sm-icon" src={window.circleregular}/> */}
            </div>
          </div>
          <div id='pl-add-cnt'>
            <h1 id='pl-add'>Add to playlist</h1>
          </div>
          <br/>
          <div className="pl-select-form">
            <br/>
            {playlists}
            <br/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(PlaylistSelectForm);
