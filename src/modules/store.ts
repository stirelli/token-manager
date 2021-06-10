import { applyMiddleware, compose, createStore, Store } from 'redux';
import { createRootReducer } from './reducer';
import { routerMiddleware } from 'connected-react-router';
import createSagasMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { rootSaga } from './sagas';

export const history = require('history').createBrowserHistory();

export function initStore(): Store {
  const isDev = process.env.NODE_ENV === 'development';
  const _window = window as any;

  const composeEnhancer = isDev && _window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? _window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const rootReducer = createRootReducer(history);

  const sagasMiddleware = createSagasMiddleware();
  const loggerMiddleware = createLogger({
    collapsed: () => true,
    predicate: (_: any, action: any) => isDev || action.type.includes('Failure')
  });

  const middleware = applyMiddleware(routerMiddleware(history), sagasMiddleware, loggerMiddleware);

  const enhancer = composeEnhancer(middleware);
  const store = createStore(rootReducer, enhancer);

  sagasMiddleware.run(rootSaga);

  return store;
}
