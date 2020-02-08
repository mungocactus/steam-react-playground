import React from 'react';
import Navigation from '../components/Navigation';
import logo from '../assets/images/logo-grey.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={logo} alt='logo'/>
        <button class="menu-button"></button>
      </header>
    )
  }

}

export default Header
