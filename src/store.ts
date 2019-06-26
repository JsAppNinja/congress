import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { History } from 'history';
import { createBrowserHistory } from 'history';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducers from 'state/reducers';

const middleware = [thunk, promise];

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createRootReducer = (history: History) => {
  return combineReducers({
    ...reducers,
    router: connectRouter(history)
  } as any);
};

export const history = createBrowserHistory();
export const store = createStore(
  createRootReducer(history),
  composeEnhancers(applyMiddleware(...middleware, routerMiddleware(history)))
);
