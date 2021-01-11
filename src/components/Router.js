import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import RandomUser from '../pages/RandomUser';
import Nasa from '../pages/Nasa';
import WeatherCurrent from '../pages/WeatherCurrent';

class Router extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={App} />
            <Route path='/randomuser' component={RandomUser} />
            <Route path='/nasa' component={Nasa} />
            <Route path='/weather-current' component={WeatherCurrent} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Router;
