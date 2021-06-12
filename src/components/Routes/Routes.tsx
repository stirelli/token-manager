import { Route, Switch } from 'react-router';
import { Props } from './Routes.types';
import { locations } from '../../modules/routing/location';
import { Redirect } from 'react-router-dom';
import SignIn from '../SignInPage';
import HomePage from '../HomePage';

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
      {
        <Switch>
          <Route exact path={locations.root()} component={HomePage} />
          <Redirect to={locations.root()} />
        </Switch>
      }
    </>
  );
};
export default Routes;
