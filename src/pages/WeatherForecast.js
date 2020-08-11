import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import WeatherDaily from '../components/WeatherDaily';

class WeatherForecast extends React.Component {
  constructor() {
    super();

    this.state = {
      weather: {}
    }

    this.get5DayWeather = this.get5DayWeather.bind(this);
  }

  get5DayWeather() {
    let lat;
    let lon;

    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log(lat);
      console.log(lon);
      const api = `https://api.openweathermap.org/data/2.5/onecall?units=metric&lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=b8b85e414d6d20c6db5e6b69eb3858c9`;

      fetch(api)
      .then(response => response.json())
      .then(data => {
        console.log(data.daily);
        this.setState({
          weather: data.daily
        })
      })
    });
  }

  componentDidMount() {
    this.get5DayWeather();
  }

  render() {
    console.log(this.state);
    const {weather} = this.state;
    console.log(weather);

    return (
      <div className='content'>
        <Header />
        <Navigation />
        <div className='weather-weekly-forecast'>
          <h1>Weather Forecast</h1>
          <ul className='weather-forecast'>
            {Object.keys(weather).map(key =>
              <WeatherDaily
                key={key}
                index={key}
                weatherDaily={weather[key]}
              />
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default WeatherForecast
