import React from 'react';
import Navigation from '../components/Navigation';
import Artwork from '../components/Artwork';
import Basket from '../components/Basket';

class ArtworkStatic extends React.Component {
  constructor() {
    super();

    this.state = {
      artworks: {}
    };

    // this.getSampleArworks = this.getSampleArworks.bind(this);
  }

  getSampleArworks = () => {
    console.log('artworks in here');
  }


  render() {
    return (
      <div className='content'>
        <Navigation />
        <h1>Artwork for Sale</h1>
        <Artwork />
        <Basket />
      </div>
    )
  }
}

export default ArtworkStatic;
