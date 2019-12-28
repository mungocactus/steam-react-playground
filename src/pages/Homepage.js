import React from 'react';
import Clock from '../components/Clock';
import Navigation from '../components/Navigation'
import logo from '../assets/images/steam-logo.png'

class HomePage extends React.Component {
  render() {
    return (
      <div className='homepage-content'>
        <Navigation />
        <header>
          <img src={logo} alt='logo'/>
          <Clock />
        </header>
      </div>
    )
  }
}

export default HomePage
