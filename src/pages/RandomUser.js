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

    this.randomUser = this.randomUser.bind(this);
    this.getRandomImage = this.getRandomImage.bind(this);
    this.getRandomUser = this.getRandomUser.bind(this);
  }

  randomUser() {
    fetch('https://randomuser.me/api/?results=1')
    .then(response => response.json())
    .then(
      (result) => {
        this.setState({
          results: result.results
        });
      }
    )
  }

  getRandomImage() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    this.randomImage = `/random-users/random-user-${randomNumber}.jpg`;
  }

  componentWillMount() {
    this.randomUser();
    this.getRandomImage();
  }

  getRandomUser(event) {
    event.preventDefault();
    this.randomUser();
    this.getRandomImage();
  }

  render() {
    const {results} = this.state;
    const {images} = this.state;
    console.log('results', results);
    console.log('images', images);

    return (
      <div className='content randomuser'>
        <Navigation />
        <section>
          <img src={this.randomImage} alt='random user' />
          <h3>Name</h3>
          {results.map(result => (
            <div className='info-container' key='result'>
              <p key='first'>{result.name.first}</p>
              <p key='last'>{result.name.last}</p>
            </div>
          ))}
          <h3>Address</h3>
          {results.map(result => (
            <div className='info-container' key='result'>
              <p key='number'>{result.location.street.number}</p>
              <p key='street'>{result.location.street.name},</p>
              <p key='city'>{result.location.city},</p>
              <p key='state'>{result.location.state},</p>
              <p key='country'>{result.location.country}</p>
            </div>
          ))}
          <button onClick={this.getRandomUser}>Get New User</button>
        </section>
      </div>
    )
  }
}

export default RandomUser
