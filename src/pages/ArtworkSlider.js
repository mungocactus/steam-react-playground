import React from 'react';
import Navigation from '../components/Navigation';
import Artwork from '../components/Artwork';

class ArtworkSlider extends React.Component {

  render() {
    return (
      <div className='content'>
        <Navigation />
        <h1>Artwork Slider</h1>
        <Artwork />
      </div>
    )
  }
}

export default ArtworkSlider;
