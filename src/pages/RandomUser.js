import React from 'react';
import Navigation from '../components/Navigation';
import randomUser from '../assets/images/random-users/random-user-8.jpg';

class RandomUser extends React.Component {
  constructor() {
    super();

    this.state = {
      results: []
    };

    console.log(this.state);

    this.getEmail = this.getEmail.bind(this);
  }

  getEmail(event) {
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

    console.log('state of this', this.state.person);

  }

  render() {
    const {results} = this.state;
    console.log(results);

    return (
      <div className='content'>
        <Navigation />
        <h1>Get your Random User</h1>
        <div className='user-content'>
          <img src={randomUser} alt='random user' />
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
        <button onClick={this.getEmail}>Get User</button>
      </div>
    )
  }
}

export default RandomUser
