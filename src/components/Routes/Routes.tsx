import { Route, Switch } from 'react-router';
import { locations } from '../../modules/routing/location';
import HomePage from '../HomePage';

const Routes = () => (
  <>
    <Switch>
      <Route path={locations.root()} component={HomePage} />
    </Switch>
  </>
);

export default Routes;
