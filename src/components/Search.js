import React from 'react';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      searchQuery: '',
      results: []
    };

    this.searchResults = this.searchResults.bind(this);
    this.getResults = this.getResults.bind(this);
  }

  searchInput = React.createRef();

  searchResults() {
    const searchInput = this.searchInput.current.value;
    console.log(searchInput);
    this.setState({
      searchQuery: this.searchInput.current.value
    });
    this.getResults();
  }

  getResults() {
    console.log('something');
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${this.state.searchQuery}`, {
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    		"x-rapidapi-key": "bb6574979bmshe9a40ee1f56cbebp1bf556jsna835e4d03c9e"
    	}
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        results: data
      })
      console.log(data);
    })
  }

  render() {
    return (
      <form>
        <p>Search</p>
        <input
        type="text"
        id="search"
        ref={this.searchInput}
        onChange={this.searchResults}
        />
      </form>
    )
  }
}

export default Search
