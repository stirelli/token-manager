import { connect } from 'react-redux';
import { RootState } from '../../modules/reducer';
import { isConnected } from '../../modules/wallet/selectors';
import Routes from './Routes';
import { MapStateProps } from './Routes.types';

const mapState = (state: RootState): MapStateProps => ({
  isConnected: isConnected(state)
});

const mapDispatch = () => ({});

export default connect(mapState, mapDispatch)(Routes);
