import { Route, Switch } from 'react-router';
import { Props } from './Routes.types';
import { locations } from '../../modules/routing/location';
import SignIn from '../SignIn';
import { Redirect } from 'react-router-dom';

const Routes = ({ isConnected }: Props) => {
  if (!isConnected) {
    return (
      <>
        <Switch>
          <Route exact path={locations.signIn()} component={SignIn} />
          <Redirect to={locations.signIn()} />
        </Switch>
      </>
    );
  }

  return (
    <>
      {/* {      <Switch>
        <Route exact path={locations.root()} component={SignIn} />
        <Redirect to={locations.root()} />
      </Switch>} */}
    </>
  );
};
export default Routes;
