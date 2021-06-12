import { createSelector } from 'reselect';
import { WalletState } from './reducer';

export const getState: (state: any) => WalletState = state => state.wallet;
export const getData = (state: any) => getState(state).data;
export const getError = (state: any) => getState(state).error;

export const isConnected = (state: any) => getData(state) !== null;
export const getBalance = createSelector(getData, data => data?.balance.toString());
