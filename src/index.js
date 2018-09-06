import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import App from './components/app';
import reducers from './reducers';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';

import 'rxjs';
import $ from 'jquery';
import 'bootstrap';
import "react-alice-carousel/lib/alice-carousel.css";
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/imageSlider.css';
import './assets/js/popper.min.js';
import 'botframework-webchat/botchat.css';


fontawesome.library.add(solid)

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('container'));