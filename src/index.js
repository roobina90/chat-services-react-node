/* eslint-disable import/default */

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import RoomsContainer from './components/containers/roomsContainer';
import ChatContainer from './components/containers/ChatContainer';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore();
render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={RoomsContainer} />
      <Route path="/:room" component={ChatContainer} />
    </Router>
  </Provider>,
  document.getElementById('main')
);