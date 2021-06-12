import { connect } from 'react-redux';
import { RootState } from '../../modules/reducer';
import { sendTokenRequest } from '../../modules/wallet/actions';
import { getBalance } from '../../modules/wallet/selectors';
import HomePage from './HomePage';
import { MapDispatch, MapDispatchProps, MapStateProps } from './HomePage.types';

const mapState = (state: RootState): MapStateProps => {
  return {
    balance: getBalance(state)
  };
};

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onTransfer: (address: string, amount: number) => dispatch(sendTokenRequest(address, amount))
});

export default connect(mapState, mapDispatch)(HomePage);
