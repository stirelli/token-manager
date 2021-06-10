import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { history, initStore } from './modules/store';

import 'decentraland-ui/lib/styles.css';
import './index.css';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './components/Routes';
import { Footer, Navbar } from 'decentraland-ui';

function main() {
  const component = (
    <Provider store={initStore()}>
      <Navbar />
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
      <Footer />
    </Provider>
  );

  ReactDOM.render(component, document.getElementById('root'));
}

main();
