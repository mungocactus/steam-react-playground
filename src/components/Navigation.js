import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <div className='navigation'>
        <a href='/'>Home</a>
        <a href='/randomuser'>Random User</a>
      </div>
    )
  }
}

export default Navigation
