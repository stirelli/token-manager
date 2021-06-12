import { connect } from 'react-redux';
import SignIn from './SignInPage';
import { connectWalletRequest } from '../../modules/wallet/actions';
import { MapDispatch, MapDispatchProps } from './SignInPage.types';

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onConnect: () => dispatch(connectWalletRequest())
});

export default connect(null, mapDispatch)(SignIn) as any;
