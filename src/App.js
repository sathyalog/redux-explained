import React, { Fragment } from 'react';
import './App.css';
//Redux
import {Provider} from 'react-redux';
import store from './store';

function App() {

  const inputHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }

  const selectHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <Provider store={store}>
      <Fragment>
        <br/>Redux Explained: <br/><br/>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="price">Price</label>
                <input type="number" name="price" onChange={(e) => inputHandler(e)}/>
              </td>
              <td>
                <label htmlFor="quantity">Quantity</label>
                <select onChange={e => selectHandler(e)}>
                  <option val="1">1</option>
                  <option val="2">2</option>
                  <option val="3">3</option>
                </select>
              </td>
              <td>
                Total: 0
              </td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    </Provider>
  );
}

export default App;
