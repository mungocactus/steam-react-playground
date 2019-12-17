import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RandomUser from '../pages/RandomUser';
import App from './App';

class Router extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={App} />
            <Route path='/randomuser' component={RandomUser} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Router;
