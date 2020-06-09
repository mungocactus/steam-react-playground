import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    }

    this.currentTime = this.currentTime.bind(this);
  }

  currentTime() {
    this.setState({
      time: new Date()
    });
  }

  componentDidMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  render() {
    return (
      <React.Fragment>
        <p className='clock'>{this.state.time.toLocaleTimeString()}</p>
      </React.Fragment>
    )
  }
}

export default Clock
