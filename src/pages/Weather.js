import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Wip from '../components/Wip';
import Search from '../components/Search';


class Weather extends React.Component {
  constructor() {
    super();

    this.getWeather = this.getWeather.bind(this);
  }

  getWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Gateshead&appid=b8b85e414d6d20c6db5e6b69eb3858c9")
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
  }

  componentDidMount() {
    this.getWeather();
  }

  render() {
    return (
      <div className='content'>
        <Header />
        <Navigation />
        <Wip />
        <h1>Weather</h1>
        <Search />
      </div>
    )
  }
}

export default Weather
