import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Wip from '../components/Wip';

class ArtworkSlider extends React.Component {

  render() {
    return (
      <div className='content'>
        <Header />
        <Navigation />
        <Wip />
        <h1>Artwork Slider</h1>
      </div>
    )
  }
}

export default ArtworkSlider;
