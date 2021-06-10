import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { walletReducer as wallet } from './wallet/reducer';

export const createRootReducer = (history: History) => combineReducers({ router: connectRouter(history), wallet });

export type RootState = ReturnType<typeof createRootReducer>;
