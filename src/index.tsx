import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import axe from 'react-axe';

import { ConnectedRouter } from 'connected-react-router';

import { history, store } from 'store';
import App from 'App';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') axe(React, ReactDOM, 1000);
