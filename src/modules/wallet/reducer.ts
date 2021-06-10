import { ConnectWalletFailureAction, ConnectWalletRequestAction, ConnectWalletSuccessAction, CONNECT_WALLET_SUCCESS } from './actions';
import { Wallet } from './types';

export type WalletState = {
  data: Wallet | null;
  error: string | null;
};

export const INITIAL_STATE: WalletState = {
  data: null,
  error: null
};

export type WalletReducerAction = ConnectWalletRequestAction | ConnectWalletSuccessAction | ConnectWalletFailureAction;

export function walletReducer(state: WalletState = INITIAL_STATE, action: WalletReducerAction) {
  switch (action.type) {
    case CONNECT_WALLET_SUCCESS: {
      return {
        ...state,
        error: null,
        data: action.payload.wallet
      };
    }

    default:
      return state;
  }
}
