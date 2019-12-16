import React from 'react';
import Clock from './Clock';
import Navigation from './Navigation'

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navigation />
        <Clock />
      </header>
    )
  }
}

export default Header
