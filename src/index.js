import React from 'react';
import ReactDom from 'react-dom';
import Router from './components/Router';
import * as serviceWorker from './serviceWorker';

import './styles/styles.scss';

ReactDom.render (
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.querySelector('#content')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
