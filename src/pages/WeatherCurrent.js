import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

class WeatherCurrent extends React.Component {
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
    let lat;
    let lon;

    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log(lat);
      console.log(lon);
      const api = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=b8b85e414d6d20c6db5e6b69eb3858c9`;

      fetch(api)
      .then(response => response.json())
      .then(data => {
        console.log(data);
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
    });
  }

  componentDidMount() {
    this.getWeather();
  }

  render() {
    const temperature = this.state.temp;
    const windSpeed = this.state.windSpeed;
    const windDirection = this.state.windDirection;
    const pressure = this.state.pressure;
    const humidity = this.state.humidity;
    const location = this.state.location;
    const overall = this.state.overall;
    const description = this.state.description;
    console.log(this.state);

    const temp = Math.round(temperature);
    let tempColour = 'temp';
    temp < 0 ? tempColour = 'temp freeze' : temp < 6 ? tempColour = 'temp cold' : temp < 10 ? tempColour = 'temp cool' : temp < 14 ? tempColour = 'temp' :
    temp < 17 ? tempColour = 'temp mild' : temp < 20 ? tempColour = 'temp warm' : temp < 26 ? tempColour = 'temp hot' : tempColour = 'temp red';

    const rotate = {transform: `rotate(${windDirection}deg)`};

    const windSpeedKmph = Math.round(windSpeed * 3.6);
    let windWarning = 'wind-direction';
    console.log(windSpeedKmph);
    console.log(rotate);
    windSpeedKmph > 40 ? windWarning = 'wind-direction wind-warning' : windWarning = 'wind-direction';

    console.log(windDirection);

    return (
      <div className='content'>
        <Header />
        <Navigation />
        <div className='weather-today'>
          <div className='weather'>
            <h1>Weather Today</h1>
            <p className='location'>{location}</p>
            <div className='temp-container'>
              <p>Current temperature</p>
              <h1 className={tempColour}>{temp}</h1>
            </div>
            <div className='overall'>
              <h2>{overall}</h2>
              <p>{description}</p>
            </div>
          </div>
          <div className='weather'>
            <div className='weather-divider'></div>
            <div className='conditions'>
              <h3>Humidity</h3>
              <h3>{humidity}%</h3>
            </div>
            <div className='conditions'>
              <h3>Pressure</h3>
              <h3>{pressure}</h3>
            </div>
            <div className='conditions'>
              <h3 style={windSpeedKmph > 40 ? {display: 'none'} : {display: 'block'}}>Wind</h3>
              <h3 className='red' style={windSpeedKmph > 40 ? {display: 'block'} : {display: 'none'}}>Strong Winds</h3>
              <h3 style={windSpeedKmph > 40 ? {color: 'red'} : {color: '#000'}}>{windSpeedKmph} kmph</h3>
              <div className={windWarning} style={rotate}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352.71 352.01"><path d="M321.09 175.43c0-3.09-.11-6.15-.3-9.19l25.51-9.1c-.81-7.58-2.11-15.02-3.88-22.27l-27.07.1c-1.76-6.05-3.9-11.94-6.4-17.64l20.85-17.27c-3.34-6.79-7.12-13.34-11.29-19.58l-25.41 9.36c-3.7-5.05-7.72-9.86-12.03-14.38l13.68-23.35a171.925 171.925 0 00-17.3-14.56l-20.66 17.47c-5.18-3.47-10.6-6.62-16.23-9.41l4.87-26.64c-6.85-3.04-13.94-5.63-21.23-7.76l-13.45 23.51c-6.02-1.47-12.18-2.57-18.47-3.26l-4.53-26.68c-3.81-.25-7.65-.4-11.52-.4-3.73 0-7.42.13-11.09.37l-4.6 26.67c-6.29.68-12.46 1.76-18.48 3.22L128.67 11.1a169.59 169.59 0 00-21.25 7.71l4.81 26.65a145.15 145.15 0 00-16.25 9.37L75.35 37.28c-6.1 4.46-11.89 9.31-17.34 14.52l13.63 23.39c-4.32 4.51-8.36 9.3-12.07 14.34L34.18 80.1c-4.19 6.24-7.98 12.77-11.34 19.56l20.8 17.32c-2.51 5.69-4.67 11.58-6.44 17.63l-27.07-.17c-1.78 7.25-3.11 14.68-3.93 22.27l25.48 9.16a143.9 143.9 0 00-.32 9.55c0 3.09.11 6.15.3 9.19l-25.51 9.1c.81 7.58 2.11 15.02 3.88 22.27l27.07-.1c1.76 6.05 3.9 11.94 6.4 17.64L22.64 250.8c3.34 6.79 7.12 13.34 11.29 19.58l25.41-9.36c3.7 5.05 7.72 9.86 12.03 14.38L57.7 298.75c5.43 5.22 11.22 10.09 17.3 14.56l20.66-17.47c5.18 3.47 10.6 6.62 16.23 9.41l-4.87 26.64c6.85 3.04 13.94 5.63 21.23 7.76l13.45-23.51c6.02 1.47 12.18 2.57 18.47 3.26l4.53 26.68c3.81.25 7.65.4 11.52.4 3.73 0 7.42-.13 11.09-.37l4.6-26.67c6.29-.68 12.46-1.76 18.48-3.22l13.39 23.54c7.3-2.11 14.39-4.69 21.25-7.71l-4.81-26.65a145.15 145.15 0 0016.25-9.37l20.62 17.53c6.1-4.46 11.89-9.31 17.34-14.52l-13.63-23.39c4.32-4.51 8.36-9.3 12.07-14.34l25.39 9.43c4.19-6.24 7.98-12.77 11.34-19.56l-20.8-17.32c2.51-5.69 4.67-11.58 6.44-17.63l27.07.17c1.78-7.25 3.11-14.68 3.93-22.27l-25.48-9.16c.22-3.15.33-6.33.33-9.54zm-142.93 94.1l-1.5 2.17-.1-.12-.1.12-1.55-2.24-67.36-86.22 18.48-14.44 38.95 49.94-.27-136.31 23.46-.07.4 135.58 38.51-49.14 18.48 14.44-67.4 86.29z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherCurrent
