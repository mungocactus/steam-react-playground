import React from 'react';
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Clock from '../components/Clock';
import logo from '../assets/images/logo-grey.png'

class HomePage extends React.Component {
  render() {
    return (
      <div className='homepage-content'>
        <Header />
        <Clock />
      </div>
    )
  }
}

export default HomePage
