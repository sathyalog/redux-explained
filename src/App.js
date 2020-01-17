import React, { Fragment } from 'react';
import './App.css';
//Redux
import {Provider} from 'react-redux';
import store from './store';
import Checkout from './Checkout';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <br/>Redux Explained: <br/><br/>
          <Checkout/>
      </Fragment>
    </Provider>
  );
}

export default App;
