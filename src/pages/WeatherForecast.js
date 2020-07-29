import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

class WeatherForecast extends React.Component {
  constructor() {
    super();

    this.get5DayWeather = this.get5DayWeather.bind(this);
  }

  showWeather(location, forecast) {
    console.log(location.name);
    const currentWeather = forecast[0].weather[0];
    console.log(currentWeather.description);
    console.log(forecast[0].main.temp);

    forecast.forEach(day => {
      let date = new Date(day.dt * 1000);
      let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
      let dayName = days[date.getDay()];
      // console.log(date);
      console.log(dayName);
      console.log(day);
    })
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
        console.log(data);
      })
    });
  }

  componentDidMount() {
    this.get5DayWeather();
  }

  render() {
    return (
      <div className='content'>
        <Header />
        <Navigation />
      </div>
    )
  }
}

export default WeatherForecast
