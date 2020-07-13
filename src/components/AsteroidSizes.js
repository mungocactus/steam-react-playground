import React from 'react';
import { convertToMeters, convertToThousands, convertToMetersThousands, removeParentheses} from '../helpers'

class AsteroidSizes extends React.Component {

  render() {
    const asteroidSizes = this.props.asteroidSizes;
    const diameter = Math.round(convertToMeters(asteroidSizes.estimated_diameter.kilometers.estimated_diameter_max) / 4);
    const dangerous = asteroidSizes.is_potentially_hazardous_asteroid;
    const nasaSite = asteroidSizes.nasa_jpl_url;
    // console.log(asteroidSizes.estimated_diameter.kilometers.estimated_diameter_max);
    console.log(asteroidSizes);

    return (
      <li style={dangerous ? {color:'red'} : {color:'#999'}}>
        <div className='circle' style={dangerous ? {height:diameter + 'px', width:diameter + 'px', backgroundColor:'red'} : {height:diameter + 'px', width:diameter + 'px', backgroundColor:'#999'}}></div>
        <a className='name' href={nasaSite} target='_blank' rel="noopener noreferrer">{removeParentheses(asteroidSizes.name)}</a>
        <p>{convertToMetersThousands(asteroidSizes.estimated_diameter.kilometers.estimated_diameter_max)} m</p>
        <p>{convertToThousands(asteroidSizes.close_approach_data["0"].relative_velocity.kilometers_per_hour)} kmph</p>
        <p className='distance'>{convertToThousands(asteroidSizes.close_approach_data["0"].miss_distance.kilometers)} km</p>
      </li>
    )
  }
}

export default AsteroidSizes
