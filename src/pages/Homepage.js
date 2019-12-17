import React from 'react';
import Clock from '../components/Clock';
import Navigation from '../components/Navigation'
import logo from '../assets/images/steam-logo.png'

class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <header>
          <img src={logo} alt='logo'/>
          <Clock />
        </header>
      </React.Fragment>
    )
  }
}

export default Homepage
