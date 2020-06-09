import React from 'react';
import logo from '../assets/images/steamgrafik-logo-grey.png';
import button from '../assets/images/menu-close-grey.png';

class Header extends React.Component {
  constructor() {
    super();

    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.navigation');
    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
  }

  render() {
    return (
      <header>
        <img src={logo} alt='logo'/>
        <div className="menu-btn" onClick={this.toggleNavigation}>
          <img src={button} alt='button'/>
        </div>
      </header>
    )
  }
}

export default Header
