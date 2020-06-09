import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import AsteroidSizes from '../components/AsteroidSizes';
import AsteroidSpeeds from '../components/AsteroidSpeeds';

class Nasa extends React.Component {
  constructor() {
    super();

    this.state = {
      time: new Date(),
      image: {},
      asteroids: {}
    }

    this.imageOfDay = this.imageOfDay.bind(this);
    this.asteroidsAreGo = this.asteroidsAreGo.bind(this);
  }

  imageOfDay() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=bdwaDHFx7h0ReuIY1kiocxb3dZ9Cig3xMKe240Y7")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        image: data
      });
    })
    .catch('Nothing came back, ouch!')
  }

  componentDidMount() {
    this.imageOfDay();
    this.asteroidsAreGo();
  }

  asteroidsAreGo() {
    const todaysDate = this.state.time.toISOString().substring(0,10);
    console.log(todaysDate);
    fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date&api_key=bdwaDHFx7h0ReuIY1kiocxb3dZ9Cig3xMKe240Y7")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        asteroids: data.near_earth_objects[todaysDate]
      });
    })
    .catch('Nothing came back, ouch!')
  }

  render() {
    const {image} = this.state;
    const {asteroids} = this.state;
    console.log('asteroids', asteroids);

    return (
      <div className='content nasa'>
        <Header />
        <Navigation />
        <section>
          <div className='nasa-image'>
            <img src={image.url} alt='nasa of the day' />
          </div>
          <div className='nasa-info'>
            <h1>{image.title}</h1>
            <p>{image.explanation}</p>
          </div>
        </section>
        <h1 className='asteroids-title'>Daily Asteroids are Go!</h1>
        <p>NASA publishes a list each day of asteroids based on when they are at their closest to Earth.</p>
        <p className='red'>Those in red are considered potentially hazardous to Earth.</p>
        <section className='asteroids'>
          <h1>Asteroids</h1>
          <ul>
            {Object.keys(asteroids).map(key =>
              <AsteroidSizes
              key={key}
              index={key}
              asteroidSizes={asteroids[key]}
              />)}
          </ul>
          </section>
          <section className='asteroids'>
          <h1>Asteroid Speeds</h1>
          <ul className='asteroid-speed-container'>
            {Object.keys(asteroids).map(key =>
              <AsteroidSpeeds
              key={key}
              index={key}
              asteroidSpeeds={asteroids[key]}
              />)}
            <li className='asteroid-speed-earth'>
              <h2 className='name-speed'>Earth</h2>
              <p className='speed'>107,000 kmph</p>
            </li>
            <li className='asteroid-speed-sound'>
              <h2 className='name-speed'>Speed of Sound</h2>
              <p className='speed'>1,236 kmph</p>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}

export default Nasa