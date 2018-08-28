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

import './assets/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-widgets/dist/css/react-widgets.css';
import './assets/css/style.css';
import './assets/css/reactDragList.css';
import './assets/css/imageSlider.css';

import 'botframework-webchat/botchat.css';


fontawesome.library.add(solid)

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('container'));