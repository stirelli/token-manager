import { connect } from 'react-redux';
import SignIn from './SignIn';
import { connectWalletRequest } from '../../modules/wallet/actions';
import { MapDispatch, MapDispatchProps } from './SignIn.types';

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onConnect: () => dispatch(connectWalletRequest())
});

export default connect(null, mapDispatch)(SignIn) as any;
