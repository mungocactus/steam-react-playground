import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Wip from '../components/Wip';
import Search from '../components/Search';


class Music extends React.Component {

  render() {
    return (
      <div className='content'>
        <Header />
        <Navigation />
        <Wip />
        <h1>Music</h1>
        <Search />
      </div>
    )
  }
}

export default Music
