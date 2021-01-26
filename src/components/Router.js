import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Nasa from '../pages/Nasa';
import WeatherCurrent from '../pages/WeatherCurrent';
import MusicProfiles from '../pages/MusicProfiles';
import RandomUser from '../pages/RandomUser';

class Router extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={App} />
            <Route path='/nasa' component={Nasa} />
            <Route path='/weather-current' component={WeatherCurrent} />
            <Route path='/music-profiles' component={MusicProfiles} />
            <Route path='/randomuser' component={RandomUser} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Router;
