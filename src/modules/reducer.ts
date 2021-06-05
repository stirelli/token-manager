import { connectRouter } from 'connected-react-router';
import { BrowserHistory } from 'history';
import { combineReducers } from 'redux';

export const createRootReducer = (history: BrowserHistory) =>
  combineReducers({ router: connectRouter(history) });

export type RootState = ReturnType<typeof createRootReducer>;
