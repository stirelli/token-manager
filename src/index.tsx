import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { initStore } from './modules/store';

function main() {
  const component = (
    <React.StrictMode>
      <Provider store={initStore()}></Provider>
    </React.StrictMode>
  );

  ReactDOM.render(component, document.getElementById('root'));
}

main();
