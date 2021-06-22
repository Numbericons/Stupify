import React from 'react';
import { withRouter } from 'react-router-dom';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.playlist;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSongs();
    this.props.addPlaylist(this.state);
    // this.props.addPlaylist(this.state).then(() => this.props.history.push('/')); //push to playlist/show?
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              className='pl-name-input'
              type="text-area"
              value={this.state.name}
              onChange={this.update('name')} />
          </label>

          <input className="small-btn" type="submit" value='Create' />
        </form>
      </div>
    );
  }
}

export default withRouter(PlaylistForm);
