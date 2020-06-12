import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Wip from '../components/Wip';
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
        <Header />
        <Navigation />
        <Wip />
        <section className='artwork'>
          <h1>Artwork for Sale</h1>
          <ul>
            {Object.keys(this.state.artworks).map(art => <Artwork key={art} artinfo={this.state.artworks[art]} />)}
          </ul>
        </section>
        <Basket />
      </div>
    )
  }
}

export default ArtworkStatic;
