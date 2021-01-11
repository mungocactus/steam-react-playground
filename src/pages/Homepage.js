import React from 'react';
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Clock from '../components/Clock';

class HomePage extends React.Component {
  constructor() {
    super();
  }

  // componentDidMount() {
  //   this.parallax();
  // }

  render() {
    return (
      <div className='homepage'>
        <section className='homepage-content'>
          <Header />
          <Navigation />
          <p className='title'>A little PROJECT by PAUL HESS</p>
          <Clock />
        </section>
      </div>
    )
  }
}

export default HomePage
