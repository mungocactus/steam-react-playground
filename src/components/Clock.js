import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
      day: 1,
      dayDate: 1,
      month: 1,
      year: 2000
    }

    this.currentTime = this.currentTime.bind(this);
    this.showDate = this.showDate.bind(this);
  }

  currentTime() {
    this.setState({
      time: new Date()
    });
  }

  showDate() {
    let date = new Date();

    this.setState({
      day: date.getDay(),
      dayDate: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    })
  }

  componentDidMount() {
    setInterval(() => this.currentTime(), 1000);
    this.showDate();
  }

  render() {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let done = days[this.state.day];

    let months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DECEMBER'];
    let doneMonths = months[this.state.month];

    return (
      <React.Fragment>
        <div className='date'>
          <div className='date-line'>
            <p className='clock'>{done}</p>
            <p className='clock'>{`${this.state.dayDate} ${doneMonths} ${this.state.year}`}</p>
          </div>
          <p className='clock'>{this.state.time.toLocaleTimeString()}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default Clock
