import React, { Fragment } from 'react';
import './App.css';
//Redux
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <br/>Redux Explained: <br/><br/>
        <table>
          <tr>
            <td>
              <label for="price">Price</label>
              <input type="text" name="price"/>
            </td>
            <td>
              <label for="quantity">Quantity</label>
              <select>
                <option val="1">1</option>
                <option val="2">2</option>
                <option val="3">3</option>
              </select>
            </td>
            <td>
              Total: 0
            </td>
          </tr>
        </table>
      </Fragment>
    </Provider>
  );
}

export default App;
