import React from 'react';
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Clock from '../components/Clock';

class HomePage extends React.Component {
  render() {
    return (
      <div className='homepage-content'>
        <Header />
        <Navigation />
        <p>A little PROJECT by PAUL HESS</p>
        <Clock />
      </div>
    )
  }
}

export default HomePage
