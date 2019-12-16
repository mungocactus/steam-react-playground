import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RandomUser from './RandomUser';

class Router extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/randomuser' component={RandomUser} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Router;
