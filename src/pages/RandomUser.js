import React from 'react';
import Navigation from '../components/Navigation';

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
        <div className="content">
          <h1>Get your Random User</h1>
          <div className="email-container">
            <h3>Name</h3>
            {results.map(result => (
              <div key="result">
                <p key="first" >{result.name.first}</p>
                <p key="last" >{result.name.last}</p>
              </div>
            ))}
            <h3>Address</h3>
            {results.map(result => (
              <div key="result">
                <p key="number" >{result.location.street.number}</p>
                <p key="street" >{result.location.street.name}</p>
                <p key="city" >{result.location.city}</p>
                <p key="state" >{result.location.state}</p>
                <p key="country" >{result.location.country}</p>
              </div>
            ))}
          </div>
          <button onClick={this.getEmail}>Get User</button>
        </div>
      </div>
    )
  }
}

export default RandomUser
