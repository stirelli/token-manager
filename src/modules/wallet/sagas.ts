import { all, call, put, takeEvery } from '@redux-saga/core/effects';
import {
  connectWalletFailure,
  connectWalletSuccess,
  CONNECT_WALLET_REQUEST,
  sendTokenFailure,
  SendTokenRequestAction,
  sendTokenSuccess,
  SEND_TOKEN_REQUEST
} from './actions';
import { Wallet } from './types';
import { createWallet, transferToken } from './utils';

export function* walletSaga() {
  yield all([takeEvery(CONNECT_WALLET_REQUEST, handleConnectWalletRequest), takeEvery(SEND_TOKEN_REQUEST, handleTransferToken)]);
}

function* handleConnectWalletRequest(): any {
  try {
    const wallet: Wallet = yield call(createWallet);
    yield put(connectWalletSuccess(wallet));
  } catch (error) {
    yield put(connectWalletFailure(error));
  }
}

function* handleTransferToken(action: SendTokenRequestAction): any {
  const { address, amount } = action.payload;
  try {
    yield call(() => transferToken(address, amount));
    yield put(sendTokenSuccess());
    yield call(handleConnectWalletRequest);
  } catch (error) {
    yield put(sendTokenFailure(error));
  }
}
