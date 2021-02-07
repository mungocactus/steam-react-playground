import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import SearchBox from '../components/SearchBox';
import RandomUser from '../components/RandomUser';

class RandomUserCountry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: {},
      placeholder: 'Country'
    }

    this.searchAPI = this.searchAPI.bind(this);
  }

  searchAPI(searchValue) {
    console.log('searching ...');
    console.log(searchValue);
    fetch('https://randomuser.me/api/?results=250')
    .then(response => response.json())
    .then(result => {
      console.log(searchValue);
      console.log(`${searchValue}`);
      let persons = result.results;
      let country = persons.filter(person => person.location.country === searchValue);
      console.log(country);
      this.setState({
        country: country
      })
    })
  }

  render() {
    const {country} = this.state;
    console.log(this.state);
    return(
      <div className='content'>
        <Header />
        <Navigation />
        <div className='randomuser-country'>
          <h1>Search for Randon Users by Country</h1>
          <div className='search-field'>
            <div className='country-list'>
              <p>List of Countries available on Random User API</p>
              <ul>
              <li>Australia</li>
              <li>Brazil</li>
              <li>Canada</li>
              <li>Finland</li>
              <li>France</li>
              <li>Germany</li>
              <li>Iran</li>
              <li>Ireland</li>
              <li>New Zealand</li>
              <li>Norway</li>
              <li>Spain</li>
              <li>Switzerland</li>
              <li>Turkey</li>
              <li>United Kingdom</li>
              <li>United States</li>
              </ul>
            </div>
            <SearchBox dinosaurs={this.searchAPI} placeholderText={this.state.placeholder} />
          </div>
          <div className='flag-container'>
            <div className='flag'></div>
          </div>
          <ul>
            {Object.keys(country).map(key =>
              <RandomUser
              index={key}
              key={key}
              randomUser={country[key]}
            />)}
          </ul>
        </div>
      </div>
    )
  }
}

export default RandomUserCountry
