import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import images from '../components/Images'

class RandomUserSolo extends React.Component {
  constructor() {
    super();

    this.state = {
      nameFirst: 'Bob',
      nameLast: 'Dylan',
      streetNumber: '112',
      streetName: 'Ashleigh Road',
      city: 'Mortlake',
      stateCounty: 'London',
      country: 'United Kingdom',
      images: images
    };

    this.randomUser = this.randomUser.bind(this);
    this.getRandomImage = this.getRandomImage.bind(this);
    this.getRandomUser = this.getRandomUser.bind(this);
  }

  randomUser() {
    fetch('https://randomuser.me/api/?results=1')
    .then(response => response.json())
    .then(data => {
        this.setState({
          nameFirst: data.results['0'].name.first,
          nameLast: data.results['0'].name.last,
          streetNumber: data.results['0'].location.street.number,
          streetName: data.results['0'].location.street.name,
          city: data.results['0'].location.city,
          stateCounty: data.results['0'].location.state,
          country: data.results['0'].location.country
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
    const {images} = this.state;
    const nameFirst = this.state.nameFirst;
    const nameLast = this.state.nameLast;
    const streetNumber = this.state.streetNumber;
    const streetName = this.state.streetName;
    const city = this.state.city;
    const stateCounty = this.state.stateCounty;
    const country = this.state.country;

    console.log('images', images);

    return (
      <div className='content'>
        <Header />
        <Navigation />
        <section className='randomuser'>
          <img src={this.randomImage} alt='random user' />
          <h3>Name</h3>
          <div className='info-container'>
            <p>{nameFirst}</p>
            <p>{nameLast}</p>
          </div>
          <h3>Address</h3>
          <div className='info-container'>
            <p>{streetNumber}</p>
            <p>{streetName},</p>
            <p>{city},</p>
            <p>{stateCounty},</p>
            <p>{country}</p>
          </div>
          <button className='randomuser-btn' onClick={this.getRandomUser}>Get New User</button>
        </section>
      </div>
    )
  }
}

export default RandomUserSolo
