import React from 'react';
import { removeDecimal, convertToThousands, removeParentheses } from '../helpers'

class AsteroidSpeeds extends React.Component {

  render() {
    const asteroidSpeeds = this.props.asteroidSpeeds;
    const speed = Math.round(removeDecimal(asteroidSpeeds.close_approach_data["0"].relative_velocity.kilometers_per_hour) / 1000);
    const dangerous = asteroidSpeeds.is_potentially_hazardous_asteroid;

    return (
      <li className='asteroid-speed' style={dangerous ? {width:speed + '%', backgroundColor:'red'} : {width:speed + '%', backgroundColor:'#999'}}>
        <h2 className='name-speed'>{removeParentheses(asteroidSpeeds.name)}</h2>
        <p className='speed'>{convertToThousands(asteroidSpeeds.close_approach_data["0"].relative_velocity.kilometers_per_hour)} kmph</p>
      </li>
    )
  }
}

export default AsteroidSpeeds
