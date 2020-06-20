import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

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
        <div className='weather'>
          <h1>Weather Today</h1>
          <p className='location'>{location}</p>
          <div className='temp'>
            <p>Current temperature</p>
            <h1>{Math.round(temp)}</h1>
          </div>
          <div className='overall'>
            <h2>{overall}</h2>
            <p>{description}</p>
          </div>
          <div className='conditions'>
            <h3>Humidity</h3>
            <h3>{humidity}%</h3>
          </div>
          <div className='conditions'>
            <h3>Pressure</h3>
            <h3>{pressure}</h3>
          </div>
          <div className='conditions'>
            <h3>Wind</h3>
            <h3>{Math.round(windSpeed * 3.6)} kmph</h3>
            <p>{windDirection}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CurrentWeather
