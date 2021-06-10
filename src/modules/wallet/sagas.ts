import { all, call, put, takeEvery } from '@redux-saga/core/effects';
import { connectWalletFailure, connectWalletSuccess, CONNECT_WALLET_REQUEST } from './actions';
import { Wallet } from './types';
import { buildWallet } from './utils';

export function* walletSaga() {
  yield all([takeEvery(CONNECT_WALLET_REQUEST, handleConnectWalletRequest)]);
}

function* handleConnectWalletRequest(): any {
  try {
    const wallet: Wallet = yield call(buildWallet);
    console.log(wallet);
    yield put(connectWalletSuccess(wallet));
  } catch (error) {
    yield put(connectWalletFailure(error));
  }
}
