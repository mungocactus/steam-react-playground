import React from 'react';
// import { convertToMeters, convertToThousands, convertToMetersThousands, removeParentheses} from '../helpers'

class WeatherDaily extends React.Component {

  render() {
    const weatherDaily = this.props.weatherDaily;
    const windSpeed = this.props.weatherDaily.wind_speed;
    console.log(weatherDaily);
    let date = new Date(weatherDaily.dt * 1000);
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    let day = days[date.getDay()];

    const iconId = weatherDaily.weather["0"].icon;
    console.log(iconId);

    let weatherImage = '/weather/overcast.jpg';
    console.log(weatherImage);

    switch(iconId) {
      case '01d':
        weatherImage = '/weather/clear-day.jpg';
        break;
      case '02d':
        weatherImage = '/weather/few-clouds.jpg';
        break;
      case '03d':
        weatherImage = '/weather/scattered-clouds.jpg';
        break;
      case '04d':
        weatherImage = '/weather/overcast.jpg';
        break;
      case '09d':
        weatherImage = '/weather/rain.jpg';
        break;
      case '10d':
        weatherImage = '/weather/rain.jpg';
        break;
      case '11d':
        weatherImage = '/weather/rain.jpg';
        break;
      case '13d':
        weatherImage = '/weather/overcast.jpg';
        break;
      case '50d':
        weatherImage = '/weather/overcast.jpg';
        break;
      default:
        weatherImage = '/weather/overcast.jpg';
    }

    return (
      <li className='weather-daily'>
        <div className='weather-background' style={{backgroundImage:`url(${weatherImage})`}}>
          <p className='day'>{day}</p>
          <p className='max'>Max</p>
          <p className='max-temp'>{Math.round(weatherDaily.temp.max)}</p>
          <p className='min'>Min</p>
          <p className='min-temp'>{Math.round(weatherDaily.temp.min)}</p>
        </div>
        <p className='main-description'>{weatherDaily.weather["0"].main}</p>
        <p className='description'>{weatherDaily.weather["0"].description}</p>
        <div className='wind-details'>
          <p>Wind speed</p>
          <div className='circle'>
            <p>{Math.round(windSpeed * 3.6)}</p>
          </div>
        </div>
        <div className='sun-details'>
          <p>Sunrise</p>
          <p>05:41</p>
        </div>
        <div className='sun-details'>
          <p>Sunset</p>
          <p>21:41</p>
        </div>
      </li>
    )
  }
}

export default WeatherDaily
