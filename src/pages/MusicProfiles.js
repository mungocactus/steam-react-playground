import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Wip from '../components/Wip';
import SearchBox from '../components/SearchBox';
import MusicianProfile from '../components/MusicianProfile';


class MusicProfiles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      musicians: {}
    }

    this.search = this.search.bind(this);
  }

  search(searchValue) {
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchValue}`, {
      "method": "GET",
    	"headers": {
    		"x-rapidapi-key": "bb6574979bmshe9a40ee1f56cbebp1bf556jsna835e4d03c9e",
    		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
    	}
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.data);
      let bobbies = data.data;
      console.log(`${searchValue}`);

      let bobbyArtist = bobbies.filter(bobby => bobby.artist.name === `${searchValue}`);
      console.log(bobbies, 'bobbies');
      console.log(bobbyArtist);
      this.setState({
        musicians: data.data
      })
    })
  }

  render() {
    const {musicians} = this.state;
    console.log(this.state);
    console.log({musicians});

    return (
      <div className='content'>
      <Header />
      <Navigation />
      <Wip />
      <h1>Music</h1>
      <SearchBox dinosaurs={this.search} />
      <h2>Musicians</h2>
      <ul>
        {Object.keys(musicians).map(key =>
        <MusicianProfile
        key={key}
        index={key}
        musicianProfile={musicians[key]}/>
        )}
      </ul>
      </div>
    )
  }
}

export default MusicProfiles
