import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import RandomUser from '../pages/RandomUser';
import ArtworkStatic from '../pages/ArtworkStatic';
import ArtworkSlider from '../pages/ArtworkSlider';
import Inventory from '../pages/Inventory';
import Nasa from '../pages/Nasa';
import Music from '../pages/Music';


class Router extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={App} />
            <Route path='/randomuser' component={RandomUser} />
            <Route path='/artwork' component={ArtworkStatic} />
            <Route path='/artwork-slider' component={ArtworkSlider} />
            <Route path='/inventory' component={Inventory} />
            <Route path='/nasa' component={Nasa} />
            <Route path='/music' component={Music} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Router;
