import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {time: new Date()}
    this.currentTime = this.currentTime.bind(this);
  }

  currentTime() {
    this.setState({time: new Date()});
  }

  componentWillMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  render() {
    return (
      <React.Fragment>
        <p>{this.state.time.toLocaleTimeString()}</p>
      </React.Fragment>
    )
  }
}

export default Clock