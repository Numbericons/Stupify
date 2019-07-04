import React from 'react';

export default class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: this.props.duration
    };
    // this.tick = this.tick.bind(this);
  }

//   componentDidMount() {
//     this.intervalId = setInterval(this.tick, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   tick() {
//     duration = this.state.duration;  
//     this.setState({duration: duration});
//   }

  render() {
    let minutes = Math.floor(this.state.time / 60)
    let seconds = this.state.time % 60

    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;
    return (
      <div>
        <div className='clock'>
               {minutes}:{seconds}
        </div>
      </div>
    )
  }
};
