import { Dispatch } from 'react';
import { ConnectWalletRequestAction } from '../../modules/wallet/actions';

export type SignInProps = {
  onConnect: () => any;
};

export type MapDispatchProps = SignInProps;
export type MapDispatch = Dispatch<ConnectWalletRequestAction>;
