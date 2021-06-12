import { Dispatch } from 'react';
import { SendTokenRequestAction } from '../../modules/wallet/actions';

export type HomePageProps = {
  balance?: string;
  onTransfer: (address: string, amount: number) => any;
};

export type MapStateProps = Pick<HomePageProps, 'balance'>;

export type MapDispatch = Dispatch<SendTokenRequestAction>;
export type MapDispatchProps = Pick<HomePageProps, 'onTransfer'>;
