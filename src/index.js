import React from 'react';
import {render} from 'react-dom';
import Router from './components/Router';
import * as serviceWorker from './serviceWorker';

import './styles/styles.scss';

render (<Router />, document.querySelector('#content'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
