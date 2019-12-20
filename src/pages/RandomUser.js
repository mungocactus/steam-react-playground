import React from 'react';
import Navigation from '../components/Navigation';
import images from '../components/Images'

class RandomUser extends React.Component {
  constructor() {
    super();

    this.state = {
      results: [],
      images: images
    };

    console.log(this.state);

    this.getRandomUser = this.getRandomUser.bind(this);
    this.getRandomImage = this.getRandomImage.bind(this);

    this.randomUser = images.randomUser9.image;
    console.log(this.randomUser);
  }

  getRandomImage() {
    // const randomUser = randomUser8;

    this.setState({
      images: images
    })

    const banannas = '/random-users/random-user-8.jpg';

    console.log(banannas, 'chinaman');

  }

  getRandomUser(event) {
    event.preventDefault();
    fetch('https://randomuser.me/api/?results=1')
    .then(response => response.json())
    .then(
      (result) => {
        this.setState({
          results: result.results
        });
      }
    )

    this.getRandomImage();

    console.log('state of this', this.state.images);
  }

  render() {
    const {results} = this.state;
    const {images} = this.state;
    console.log(results);
    console.log(images);

    return (
      <div className='content'>
        <Navigation />
        <h1>Get your Random User</h1>
        <div className='user-content'>
          <img src={imageR} alt='random user' />
            <h3>Name</h3>
            {results.map(result => (
              <div className='info-container' key='result'>
                <p key='first' >{result.name.first}</p>
                <p key='last' >{result.name.last}</p>
              </div>
            ))}
            <h3>Address</h3>
            {results.map(result => (
              <div className='info-container' key='result'>
                <p key='number' >{result.location.street.number}</p>
                <p key='street' >{result.location.street.name},</p>
                <p key='city' >{result.location.city},</p>
                <p key='state' >{result.location.state},</p>
                <p key='country' >{result.location.country}</p>
              </div>
            ))}
        </div>
        <button onClick={this.getRandomUser}>Get User</button>
      </div>
    )
  }
}

export default RandomUser
