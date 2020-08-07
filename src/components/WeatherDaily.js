import React from 'react';
// import { convertToMeters, convertToThousands, convertToMetersThousands, removeParentheses} from '../helpers'

class WeatherDaily extends React.Component {

  render() {
    const weatherDaily = this.props.weatherDaily;
    console.log(weatherDaily);
    let date = new Date(weatherDaily.dt * 1000);
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    let day = days[date.getDay()];
    console.log(date);
    console.log(day);
    // const maxTemp = weatherDaily;


    return (
      <li className='weather-daily'>
        <div className='weather-background'>
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
            <p>41</p>
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
