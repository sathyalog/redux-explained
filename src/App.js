import React, { Fragment } from 'react';
import './App.css';
//Redux
import {Provider} from 'react-redux';
import store from './store';
import Checkout from './Checkout';
import  Products  from './Products';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
          <br/>
          <h2>Redux Explained</h2> 
          <br/><br/>
          <Checkout/>
          <Products/>
      </Fragment>
    </Provider>
  );
}

export default App;
