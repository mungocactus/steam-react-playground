import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Wip from '../components/Wip';

class Inventory extends React.Component {
  constructor() {
    super();

    this.createNewArtwork =  this.createNewArtwork.bind(this);
  }

  titleRef = React.createRef();
  imageRef = React.createRef();
  sizeRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descriptRef = React.createRef();

  createNewArtwork(event) {
    event.preventDefault();
    const artwork = {
      title: this.titleRef.current.value,
      image: this.imageRef.current.value,
      size: this.sizeRef.current.value,
      price: this.priceRef.current.value,
      status: this.statusRef.current.value,
      descript: this.descriptRef.current.value
    }

    console.log(artwork);
  }

  render() {
    return (
      <div className='content inventory'>
        <Header />
        <Navigation />
        <Wip />
        <h1>Inventory</h1>
        <form onSubmit={this.createNewArtwork}>
          <input name='title' ref={this.titleRef} type='text' placeholder='artwork title'/>
          <input name='image' ref={this.imageRef} type='text' placeholder='artwork image'/>
          <input name='size' ref={this.sizeRef} type='text' placeholder='size'/>
          <input name='price' ref={this.priceRef} type='text' placeholder='price' />
          <select name='status' ref={this.statusRef} type='text' placeholder='available'>
            <option>Choose an option</option>
            <option value='available'>For sale</option>
            <option value='unavailable'>Sold</option>
          </select>
          <textarea name='descript' ref={this.descriptRef} placeholder='description'/>
          <button type='submit'>Add Artwork</button>
        </form>
        <button onClick={this.props.getSampleArworks}>Get Sample Artwork</button>
      </div>
    )
  }
}

export default Inventory;
