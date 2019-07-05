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
    this.props.addPlaylist(this.state)
    // this.props.addPlaylist(this.state).then(() => this.props.history.push('/')); //push to playlist/show?
  }

  render () {
    return (
      <div>
        <h3>'Create new playlist'</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name
            <input
              id='pl-name-input'
              type="text"
              value={this.state.name}
              onChange={this.update('name')} />
          </label>

          <input type="submit" value='Create' />
        </form>
      </div>
    );
  }
}

export default withRouter(PlaylistForm);
