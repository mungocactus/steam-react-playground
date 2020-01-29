import React from 'react';
import Navigation from '../components/Navigation';
import Artwork from '../components/Artwork';
import Basket from '../components/Basket';
import artworks from '../components/Artworks';

class ArtworkStatic extends React.Component {
  constructor() {
    super();

    this.state = {
      artworks: {}
    };
  }

  componentWillMount() {
    this.setState({
      artworks: artworks
    })
  }

  render() {
    console.log(this.state.artworks);
    return (
      <div className='content'>
        <Navigation />
        <h1>Artwork for Sale</h1>
        <ul>
          {Object.keys(this.state.artworks).map(art => <Artwork key={art} artinfo={this.state.artworks[art]} />)}
        </ul>
        <Basket />
      </div>
    )
  }
}

export default ArtworkStatic;
