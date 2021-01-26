import React from 'react';

class Navigation extends React.Component {

  render() {
    return (
      <div className='navigation'>
        <ul>
          <li><a href='/nasa'>NASA</a></li>
          <li><a href='/weather-current'>Current Weather</a></li>
          <li><a href='/music-profiles'>Music Profiles</a></li>
          <li><a href='/randomuser'>Random User</a></li>
          <li><a href='/'>Home</a></li>
        </ul>
      </div>
    )
  }
}

export default Navigation
