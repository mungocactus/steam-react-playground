import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Wip from '../components/Wip';

class CurrentWeather extends React.Component {
  constructor() {
    super();

    this.state = {
      temp: '18',
      windSpeed: '30',
      windDirection: '180',
      pressure: '1011',
      humidity: '50',
      location: 'Gateshead',
      overall: 'Sunny',
      description: 'bloody awful'
    };

    this.getWeather = this.getWeather.bind(this);
  }

  getWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=Gateshead,uk&appid=b8b85e414d6d20c6db5e6b69eb3858c9")
    .then(response => response.json())
    .then(data => {
      this.setState({
        temp: data.main.temp,
        windSpeed: data.wind.speed,
        windDirection: data.wind.deg,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        location: data.name,
        overall: data.weather['0'].main,
        description: data.weather['0'].description
      });
    })
  }

  componentDidMount() {
    this.getWeather();
  }

  render() {
    const temp = this.state.temp;
    const windSpeed = this.state.windSpeed;
    const windDirection = this.state.windDirection;
    const pressure = this.state.pressure;
    const humidity = this.state.humidity;
    const location = this.state.location;
    const overall = this.state.overall;
    const description = this.state.description;

    return (
      <div className='content'>
        <Header />
        <Navigation />
        <Wip />
        <h1>Weather</h1>
        <p>Current temperature</p>
        <h1>{temp}</h1>
        <p>Wind Speed</p>
        <p>{windSpeed}</p>
        <p>Wind Direction</p>
        <p>{windDirection}</p>
        <p>Pressure</p>
        <p>{pressure}</p>
        <p>Humidity</p>
        <p>{humidity}</p>
        <p>{location}</p>
        <p>{overall}</p>
        <p>{description}</p>
      </div>
    )
  }
}

export default CurrentWeather
