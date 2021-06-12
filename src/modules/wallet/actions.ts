import { action } from 'typesafe-actions';
import { Wallet } from './types';

export const CONNECT_WALLET_REQUEST = '[Request] Connect Wallet';
export const CONNECT_WALLET_SUCCESS = '[Success] Connect Wallet';
export const CONNECT_WALLET_FAILURE = '[Failure] Connect Wallet';

export const connectWalletRequest = () => action(CONNECT_WALLET_REQUEST);
export const connectWalletSuccess = (wallet: Wallet) => action(CONNECT_WALLET_SUCCESS, { wallet });
export const connectWalletFailure = (error: string) => action(CONNECT_WALLET_FAILURE, { error });

export type ConnectWalletRequestAction = ReturnType<typeof connectWalletRequest>;
export type ConnectWalletSuccessAction = ReturnType<typeof connectWalletSuccess>;
export type ConnectWalletFailureAction = ReturnType<typeof connectWalletFailure>;

export const SEND_TOKEN_REQUEST = '[Request] SEND TOKEN';
export const SEND_TOKEN_SUCCESS = '[Success] SEND TOKEN';
export const SEND_TOKEN_FAILURE = '[Failure] SEND TOKEN';

export const sendTokenRequest = (address: string, amount: number) => action(SEND_TOKEN_REQUEST, { address, amount });
export const sendTokenSuccess = () => action(SEND_TOKEN_SUCCESS);
export const sendTokenFailure = (error: string) => action(SEND_TOKEN_FAILURE, { error });

export type SendTokenRequestAction = ReturnType<typeof sendTokenRequest>;
export type SendTokenSuccessAction = ReturnType<typeof sendTokenSuccess>;
export type SendTokenFailureAction = ReturnType<typeof sendTokenFailure>;
